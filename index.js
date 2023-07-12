const root = document.querySelector(".root")
const inputEl = document.querySelector(".message-El");
const shiftEl = document.querySelector(".shift-El");
const outputEl = document.querySelector(".output-El");
const decryptEl = document.querySelector(".decrypted-El");
let message;
let shift;
let changedMessage;
let decryptMessage = false;
const characters = createArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

document.addEventListener("change", (e)=>{
	const {value, className} = e.target;
	className === "shift-El" ? shift = value : message = value;
})

function createArray (_string){
	let newArray = [];
	for (let character of _string) {
		newArray.push(character);
	}
	return newArray;
}

function getEncryptedMsg (){
	decryptMessage = false;
	changedMessage = encrypt(characters, shift, message, 1)
	renderMessage(outputEl, changedMessage,"Encrypted");
}

function encrypt (_characters,_shift,_message,_one){
	let newString = "";
	for (let i = 0; i < _message.length; i++) {
		let character = _message[i].toUpperCase();
		if(character != " "){	
			let charIndex =_characters.indexOf(character);
			let sum =  charIndex + (_shift * _one);
			const index = decryptMessage === false ?
				sum % 26
				: 
				sum < 0 ? 26 + (sum % 26) : sum;
			let newChar = _characters[index];
			newString += newChar;		
		}
		else {
			newString += character;
		}		
	}
	return newString;
}

function decrypt(){
	decryptMessage = true;
	let decryptedMessage = encrypt(characters, shift, changedMessage, -1);
	renderMessage( decryptEl,decryptedMessage, "Decryted");
}

function renderMessage (_element,_changedMessage,_string){
	let lowerCaseMsg = ""
	createArray(_changedMessage).forEach(char => lowerCaseMsg+= char.toLowerCase());
	_element.style.display = "block";
	_element.innerText =  `${_string}: ${lowerCaseMsg}`;
}
