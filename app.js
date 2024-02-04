const firstNumber = document.getElementById("computer-number");
const firstNumberChose = firstNumber.querySelector("input");
const youChoose = document.getElementById("human-number");
const finalNumber = youChoose.querySelector("input");
const resultValue = document.querySelector("h5");

let numberValue;

function chosenNumber(event) {
  event.preventDefault();
  firstNumberChose.classList.add("numberhide");
  numberValue = firstNumberChose.value;

  localStorage.setItem("number", numberValue);
  document.querySelector("h3#shownumber").innerText = numberValue;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * parseInt(firstNumberChose.value, 10));
}

const computerGen = generateRandomNumber();

function gameResult(event) {
  event.preventDefault();
  const secondNumber = finalNumber.value;

  if (parseInt(secondNumber, 10) === parseInt(numberValue, 10)) {
    resultValue.innerText = "You won!";
  } else {
    resultValue.innerText = `Wrong! You chose ${secondNumber} and computer chose ${numberValue}`;
  }
}
firstNumber.addEventListener("submit", chosenNumber);
youChoose.addEventListener("submit", gameResult);
