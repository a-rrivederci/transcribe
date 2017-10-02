# Transcribe 
Transcribe is a service which provides captioning services for presenters.

## Inspiration
Transcribe stemmed from a process we noticed was missing during lectures and conferences. Captioning is a service provided for movies and entertainment which allows for people who are audibly impaired take part. We wanted to combine the worlds of captioning and learning by real-time continuous speech conversion available on any device.

## Alexa Skill :white_flower:
It all begins with an Alexa-skill which is used to control the trascription service by the presenter. The presenter just need say
_"Alexa, Transcribe"_
Alexa sends a start signal to a server to start the transcription process.
Then after the prompt from the Alexa,
_"Start transcribe"_
Which will send a signal to the server to stop the transcription process.


## Node Server :cloud:
The Node backend server runs continoulsy and receives a signal from the lambda function powering Alex. This signal is then sent to the Web front-end where information is collected. The infromation is sent back to the server where it is then sent to the final mobile application for the users display.


## Front end website :computer:
Recieves start and stop signal from server to start and stop transcribing microphone audio to text using google transcribe api. Then sends Transcriptions as text to server to be sent to Mobile App. Can Understand and Transcribe many different languages.


## Mobile App :iphone:
Recieves text from server and then displays text as subtitles in augmented reality. App uses camera on back of phone for the augmented reality.
