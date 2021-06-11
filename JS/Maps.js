var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


// var grammar = '#JSGF V1.0; grammar audioCommands; public <audioCommands> = ' + audioCommands.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


const mic = document.querySelector('.mic')

mic.onclick = function speech (){
    PlaySound('soundList')
    recognition.start()
    return false
}

recognition.onresult = function(event){
    const voice = event.results[0][0].transcript;
    alert(voice)
    loadMapScenario(voice)

    const r = document.querySelector("#result")
    r.onclick = function(){

        console.log(r.innerHTML)
        var msg = new SpeechSynthesisUtterance("hello")
    }
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
    alert("I didn't recognise that voice.");
}

recognition.onerror = function(event) {
    alert('Error occurred in recognition: ' + event.error);
}


function loadMapScenario(_result) {

    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(67.624527, -102.355255),
        zoom: 8,
        showSearchBar: true,
    });
    // console.log(map._options.center.latitude)
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        var searchManager = new Microsoft.Maps.Search.SearchManager(map);
        var requestOptions = {
            bounds: map.getBounds(),
            where: `${_result}`,
            callback: function (answer, userData) {
                map.setView({ bounds: answer.results[0].bestView });
                map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
            },
            center: map.getCenter()
        };

        // console.log(requestOptions)

        searchManager.geocode(requestOptions);
        // console.log(map._options.center.latitude)

        var reverseGeocodeRequestOptions = {
            location: new Microsoft.Maps.Location(map._options.center.latitude,map._options.center.longitude),
            callback: function (answer, userData) {
                map.setView({ bounds: answer.bestView });
                map.entities.push(new Microsoft.Maps.Pushpin(reverseGeocodeRequestOptions.location));
                document.getElementById('result').innerHTML =
                    answer.address.formattedAddress;
            }
        };
        console.log(reverseGeocodeRequestOptions.location)
        searchManager.reverseGeocode(reverseGeocodeRequestOptions);
    });
    
}
