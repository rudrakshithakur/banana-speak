var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-input");
var outputText = document.querySelector("#outputtext")

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL+"?" + "text="+ text;
}

function errorHandler(error){
    console.log("error occured: ",error);
    alert("Something broke in the server. Try again after sometime.");
}
function clickEventHandler() {
    // outputText.innerText="translated: "+textArea.value;
    var inputText = textArea.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",  clickEventHandler);

