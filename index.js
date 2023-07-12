const root = document.querySelector(".root")
const inputEl = document.querySelector(".messageEl");
const shiftEl = document.querySelector(".shiftEl");
const outputEl = document.querySelector(".outputEl");
const decryptEl = document.querySelector(".decryptedEl");
let message
let shift
let changedMessage
let decryptMessage = false;
const characters = createArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

document.addEventListener("change", (e)=>{
	const {value, className} = e.target;
	className === "shiftEl" ? shift = value : message = value;
})

function createArray (_string){
	let newArray = [];
	for (let character of _string) {
		newArray.push(character);
	}
	return newArray;
}

function getEncrypted (){
	decryptMessage = false;
	changedMessage = encrypt(characters, shift, message, 1);
	renderMessage(changedMessage, outputEl);
}

function encrypt (_characters,_shift,_message,_one){
	let newString = ""
	for (let character of _message) {
		if(character != " "){	
			let charIndex =_characters.indexOf(character.toUpperCase());
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
	renderMessage(decryptedMessage, decryptEl);
}

function renderMessage (_changedMessage,_element){
	_element.innerText = _changedMessage;
}
