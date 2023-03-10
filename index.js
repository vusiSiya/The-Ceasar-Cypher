
const inputEl = document.getElementById("input-El")
const Shift = document.getElementById("cypher-Shift")
const outputEl = document.getElementById("output-El")
const encryptBtn = document.getElementById("encrypt-Btn")

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

encryptBtn.addEventListener("click", function() {
  inputEl.textContent = " "
  outputEl.textContent = " ";
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
      if (newLetter === "Z") {
        newLetter = alphabets[j * 0 + (Shift.value % 26)]
      }
      else if (_message[i] === alphabets[j]) {
        console.log(alphabets[j + Shift.value])
        let newLetter = alphabets[(j + (Shift.value % 26)).toString()]
        encrypt += `${newLetter}`
      }
      else if (_message[i] === " ") {
        encrypt += " "
      }
    }
  }

  return outputEl.textContent = `Encrypted Message: ${encrypt}`;
}










