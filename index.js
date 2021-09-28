var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text= " + text; // this willl give me the translation url
}

function errorHandler(error) {
    
    alert("Something happen to the server. Please try after sometime")
}

function clickHandler() {

    // outputDiv.innerText = "jajahhsjk " + txtArea.

    
    var inputText = txtArea.value; //taking input
    // calling server for processing
    fetch(getTranslateURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translated = json.contents.translated;
            outputDiv.innerText = translated;
        })
        // .then(json => console.log(json.contents.translated));
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);