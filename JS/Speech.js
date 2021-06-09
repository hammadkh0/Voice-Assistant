var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var audioCommands = ['sign out','navigation'];
var grammar = '#JSGF V1.0; grammar audioCommands; public <audioCommands> = ' + audioCommands.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const mic = document.querySelector('.mic')
const nav = document.querySelector('#g6')

nav.onclick = function(){
    window.location.href = "navigation.html"
}

mic.onclick = function speech (){
    PlaySound('soundList')
    recognition.start()
    return false
}

recognition.onresult = function(event){
    const voice = event.results[0][0].transcript;

    alert(voice)

    audioCommands.forEach(function(e){
        if(voice == audioCommands[0]){
            window.location.href = "index.html";
        }
       
        else if(voice === e){
            window.location.href = `${voice}.html`;
        }
        
    });
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
    alert("I didn't recognise that color.");
}

recognition.onerror = function(event) {
    alert('Error occurred in recognition: ' + event.error);
}