
//Create alphabets array
//Receive a string
//
const inputEl = document.getElementById("input-El")
const Shift = document.getElementById("cypher-Shift")
const outputEl = document.getElementById("output-El")
const encryptBtn = document.getElementById("encrypt-Btn")

let letter = 'A'
let alphabets = []
let message = ""

for (let i = 0; i < 26; i++) {
    letter++;
    alphabets[i] = letter
}

message += inputEl.textContent
encryptBtn.addEventListener("click", function () {
    encryptMessage(message)
})

function encryptMessage(_message) {

    let mLength = message.length
    let aLength = alphabets.length
   // let encryption = ""

    for (let i = 0; i < mLength; i++) {
        for (let j = 0; j < aLength; j++) {
            if (message[i] === alphabets[j]) {
               outputEl.textContent += `${ (alphabets[j + 3]) % 26 }`
            }
        }
    }
   //outputEl.textContent = encryption;
    
}











