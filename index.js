const outputEl = document.querySelector(".encrypted-el");
const decryptEl = document.querySelector(".decrypted-el");
let message;
let shift;
let changedMessage;
let decryptMessage = false;
const characters = createArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

document.addEventListener("change", (e) => {
    const { value, className } = e.target;
    className === "shift-el" ? shift = value : message = value;
})

function createArray(_string) {
    let newArray = [];
    for (let character of _string) {
        newArray.push(character);
    }
    return newArray;
}


function getEncryptedMsg() {
    decryptMessage = false;
    changedMessage = encrypt(characters, shift, message, 1);
    renderMessage(changedMessage, outputEl);
}

function encrypt(_characters, _shift, _message, _one) {
    let newString = "";
    for (let i = 0; i < _message.length; i++) {
        let char = _message[i].toUpperCase();
        if (char === " ") {
            newString += char;
        }
        else {
            let charIndex = _characters.indexOf(char);
            let sum = charIndex + (_shift * _one);
            const index = decryptMessage === false ?
                sum % 26
                :
                sum < 0 ? 26 + (sum % 26) : sum;
            let newChar = _characters[index];
            newString += newChar;
        }
    }
    return newString;
}

function decrypt() {
    decryptMessage = true;
    let decryptedMessage = encrypt(characters, shift, changedMessage, -1);
    renderMessage(decryptedMessage, decryptEl);
}

function renderMessage(_changedMessage, _element) {
    _element.style.display = "block";
    const msg = createArray(_changedMessage).reduce((acc, char) => {
        return acc + char.toLowerCase()
    }, "");
    _element.innerText = msg;
}
