# Alexa Skill
```json
Alexa intent schema:
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