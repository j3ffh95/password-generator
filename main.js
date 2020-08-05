// DOM Elements
const resultEl = document.querySelector("#result"),
  lengthEL = document.querySelector("#length"),
  uppercaseEl = document.querySelector("#uppercase"),
  lowercaseEl = document.querySelector("#lowercase"),
  numbersEl = document.querySelector("#numbers"),
  symbolsEl = document.querySelector("#symbols"),
  generateEl = document.querySelector("#generate"),
  clipboardEl = document.querySelector("#clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate event listener
generateEl.addEventListener("click", () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
