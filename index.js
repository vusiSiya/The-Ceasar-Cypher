
const inputEl = document.getElementById("input-El")
const Shift = document.getElementById("cypher-Shift")
const outputEl = document.getElementById("output-El")
const encryptBtn = document.getElementById("encrypt-Btn")
const ImageElement = document.getElementById("image-El")

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

encryptBtn.addEventListener("click", function() {
  inputEl.textContent = " "
  outputEl.textContent = " ";
  ImageElement.innerHTML = `  <img src="boingBoing.png" id="cypher-Img" />`
  encryptMessage(inputEl.value)

})

function encryptMessage(_message) {
  _message = _message.toUpperCase()
  let j = 0, i = 0;
  let mLength = _message.length
  let aLength = alphabets.length
  let encrypt = ""
  let newLetter = ""

  for (i = 0; i < mLength; i++) {
    for (j = 0; j < aLength; j++) {
      if (_message[i] === alphabets[j]) {
        let sum = j + Shift.value * 1
        newLetter = alphabets[sum % 26]
        encrypt = encrypt + `${newLetter}`
      }
      else if (_message[i] === " ") {
        encrypt += " "
      }
    }
  }

  return outputEl.textContent = `Encrypted Message: ${encrypt}`;
}

