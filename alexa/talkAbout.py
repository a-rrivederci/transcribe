"""
This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well
as testing instructions are located at http://amzn.to/1LzFrj6

For additional samples, visit the Alexa Skills Kit Getting Started guide at
http://amzn.to/1LGWsLG
"""
from __future__ import print_function

import urllib.request
# --------------- Helpers that build all of the responses ----------------------

def build_speechlet_response(title, output, reprompt_text, should_end_session, debug):
    return {
        'outputSpeech': {
            'type': 'PlainText',
            'text': output
        },
        'card': {
            'type': 'Simple',
            'title': "SessionSpeechlet - " + title,
            'content': "SessionSpeechlet - " + output
        },
        'reprompt': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': reprompt_text
            }
        },
        'shouldEndSession': should_end_session,
        'debug': debug
    }


def build_response(session_attributes, speechlet_response):
    return {
        'version': '1.0',
        'sessionAttributes': session_attributes,
        'response': speechlet_response
    }


# --------------- Functions that control the skill's behavior ------------------

def get_welcome_response():
    """ If we wanted to initialize the session to have some attributes we could
    add those here
    """

    session_attributes = {}
    card_title = "Welcome"
    speech_output = "Would you like to know the inspiration of transcribe or how it works."
                    
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "What do you want to know?"
    should_end_session = False
    debug = "  "
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session, debug))


def handle_session_end_request():
    card_title = "Session Ended"
    speech_output = "Thank you for listening about transcribe. " \
                    "Bye! "
    # Setting this to true ends the session and exits the skill.
    should_end_session = True
    debug = "  "
    return build_response({}, build_speechlet_response(
        card_title, speech_output, None, should_end_session, debug))


def create_transcribe_attribute(talkAbout):
    return {"talkAbout": talkAbout}


def set_transcribe_in_session(intent, session):
    """ Sets the startStop in the session and prepares the speech to reply to the
    user.
    """
    card_title = intent['name']
    session_attributes = {}
    should_end_session = False
    if 'talkAbout' in intent['slots']:
        talkAbout = intent['slots']['talkAbout']['value']
        session_attributes = create_transcribe_attribute(talkAbout)
        if talkAbout == "inspiration":
            speech_output = "Transcribe stemmed from a process we noticed was missing during lectures and conferences. " + \
                            "Closed Captioning is a service provided for movies and entertainment to allow for people, who are visually impaired, partake in the program." +\
                            ". Subtitles are also used for media to translate other languages than ones own." + \
                            ". We wanted to combine the worlds of captioning and learning by facilitating real-time continuous speech conversion and displaying.."
            reprompt_text = "What do you want to talk about?"            
            debug = "starting reading"
        if talkAbout == "how it works":
            speech_output = "When you tell me to start or stop transcribing, I send a signal to my server. " + \
                            ". Then, my server recieves your command and starts or stops transcribing on the transcribe website." + \
                            ". The transcribe website features the use of different languages and displays how many users are viewing the same speaker. " + \
                            ". Finally, the transcribe website gets the transcribed text to your mobile device to be displayed as subtitles in augmented reality!" + \
                            ". Fascinating, right?" + \
                            ". The Transcribe creators are VERY clever!"
            reprompt_text = "what do you want to talk about?"
            debug = "stopping reading"
        else:
            speech_output = "I can only tell you about what our inspiration is and how transcribe works. The rest is a secret!"
            reprompt_text = "Let's talk.  " \
                            ". You can ask me to start or stop transcribing by saying, " \
                            "start transcribing or stop transcribing."
    else:
        speech_output = "I can only tell you about what our inspiration is and how transcribe works. The rest is a secret!"
        reprompt_text = "Let's talk.  " \
                        ". You can ask me to start or stop transcribing by saying, " \
                        "start transcribing or stop transcribing."
                        
    #print(captioning)
    should_end_session = True
    print(speech_output)
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session, debug))


def get_transcribe_from_session(intent, session):
    session_attributes = {}
    reprompt_text = None

    if session.get('attributes', {}) and "talkAbout" in session.get('attributes', {}):
        talkAbout = session['attributes']['talkAbout']
        speech_output = "You can " + talkAbout + \
                        ". Goodbye."
        should_end_session = True
    else:
        speech_output = "I'm not sure what you mean. " \
                        "Please try again."
        should_end_session = False
        debug = "   "

    # Setting reprompt_text to None signifies that we do not want to reprompt
    # the user. If the user does not respond or says something that is not
    # understood, the session will end.
    return build_response(session_attributes, build_speechlet_response(
        intent['name'], speech_output, reprompt_text, should_end_session, debug))


# --------------- Events ------------------  (Alexa is called)

def on_session_started(session_started_request, session):
    """ Called when the session starts """

    print("on_session_started requestId=" + session_started_request['requestId']
          + ", sessionId=" + session['sessionId'])


def on_launch(launch_request, session):
    """ Called when the user launches the skill without specifying what they
    want
    """

    print("on_launch requestId=" + launch_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # Dispatch to your skill's launch
    return get_welcome_response()


def on_intent(intent_request, session):
    """ Called when the user specifies an intent for this skill """

    print("on_intent requestId=" + intent_request['requestId'] +
          ", sessionId=" + session['sessionId'])

    intent = intent_request['intent']
    intent_name = intent_request['intent']['name']

    # Dispatch to your skill's intent handlers
    if intent_name == "talkAboutIsIntent":
        return set_transcribe_in_session(intent, session)
    elif intent_name == "AMAZON.HelpIntent":
        return get_welcome_response()
    elif intent_name == "AMAZON.CancelIntent" or intent_name == "AMAZON.StopIntent":
        return handle_session_end_request()
    else:
        raise ValueError("Invalid intent")


def on_session_ended(session_ended_request, session):
    """ Called when the user ends the session.

    Is not called when the skill returns should_end_session=true
    """
    print("on_session_ended requestId=" + session_ended_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # add cleanup logic here


# --------------- Main handler ------------------

def lambda_handler(event, context):
    """ Route the incoming request based on type (LaunchRequest, IntentRequest,
    etc.) The JSON body of the request is provided in the event parameter.
    """
    print("event.session.application.applicationId=" +
          event['session']['application']['applicationId'])

    """
    Uncomment this if statement and populate with your skill's application ID to
    prevent someone else from configuring a skill that sends requests to this
    function.
    """
    # if (event['session']['application']['applicationId'] !=
    #         "amzn1.echo-sdk-ams.app.[unique-value-here]"):
    #     raise ValueError("Invalid Application ID")

    if event['session']['new']:
        on_session_started({'requestId': event['request']['requestId']},
                           event['session'])

    if event['request']['type'] == "LaunchRequest":
        return on_launch(event['request'], event['session'])
    elif event['request']['type'] == "IntentRequest":
        return on_intent(event['request'], event['session'])
    elif event['request']['type'] == "SessionEndedRequest":
        return on_session_ended(event['request'], event['session'])