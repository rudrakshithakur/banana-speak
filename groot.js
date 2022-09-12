// groot codes
var btnTranslateGroot = document.querySelector("#btn-translate-groot");
var textAreaGroot = document.querySelector("#text-input-groot");
var outputTextGroot = document.querySelector("#outputtext-groot");

var serverUrlgroot ="https://api.funtranslations.com/translate/groot.json";

function getTranslationURLg(textg){
    return serverUrlgroot + "?" +"text=" +textg;
}
function errorHandlergroot(errorg){
    console.log("error occured: ",errorg);
    alert("Something broke in the server. Try again after sometime.");
}

function clickEventHandlerg(){
    var inputTextGroot = textAreaGroot.value;
    fetch(getTranslationURLg(inputTextGroot))
    .then(responseg => responseg.json())
    .then (jsong =>{
        var translatedTextGroot = jsong.contents.translated;
        outputTextGroot.innerText = translatedTextGroot;
    })
    .catch(errorHandlergroot)
}
btnTranslateGroot.addEventListener("click", clickEventHandlerg);