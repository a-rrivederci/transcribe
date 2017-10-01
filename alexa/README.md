# Alexa Skill
```json
*startStop*
#Alexa intent schema:
{
  "intents": [
    {
      "intent": "startStopIsIntent",
      "slots": [
        {
          "name": "startStop",
          "type": "START_OR_STOP"
        }
      ]
    },
    {
      "intent": "startStopIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}

# Utterances
sample utterence:
startStopIsIntent Can I {startStop}
startStopIsIntent Can you {startStop}
startStopIsIntent Can I {startStop} please
startStopIsIntent Can you {startStop} please
startStopIsIntent {startStop}
startStopIsIntent Please {startStop}
```
*startTranscribe*

#Alexa intent schema:
{
  "intents": [
    {
      "slots": [
        {
          "name": "startTrans",
          "type": "START_TRANS"
        }
      ],
      "intent": "startTransIsIntent"
    },
    {
      "intent": "startTransIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}

#Utterance:
startTransIsIntent Can I {startTrans}
startTransIsIntent Can you {startTrans}
startTransIsIntent Can I {startTrans} please
startTransIsIntent Can you {startTrans} please
startTransIsIntent {startTrans}
startTransIsIntent Please {startTrans}

*stopTranscribe*
#Alexa intent schema:
{
  "intents": [
    {
      "slots": [
        {
          "name": "stopTrans",
          "type": "STOP_TRANS"
        }
      ],
      "intent": "stopTransIsIntent"
    },
    {
      "intent": "stopTransIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}

#Utterance:
stopTransIsIntent Can I {stopTrans}
stopTransIsIntent Can you {stopTrans}
stopTransIsIntent Can I {stopTrans} please
stopTransIsIntent Can you {stopTrans} please
stopTransIsIntent {stopTrans}
stopTransIsIntent Please {stopTrans}
