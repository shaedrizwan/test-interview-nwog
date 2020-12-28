var ipField = document.querySelector("#inputField");
var btnage = document.querySelector("#btn-age");
var opField = document.querySelector("#outputField");

function clickHandler() {
    var ipText = ipField.value;
    if(ipText >= 18) {
        opField.innerText = "You are a major";
    }
    else {
        opField.innerText = "You are a minor";
    }
}

btnage.addEventListener("click",clickHandler)