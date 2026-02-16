const userInput = document.getElementById("usr-inp");
const container = document.getElementById("input-container");
const worningPara = document.createElement("span");
const indicatePara = document.createElement("span");
const numberFound = document.createElement("span");
numberFound.classList.add("worning");
indicatePara.classList.add("worning");
indicatePara.style.color = "peru";

worningPara.classList.add("worning");

container.appendChild(worningPara);
container.appendChild(indicatePara);
container.appendChild(numberFound);
userInput.addEventListener("input", function () {
  const specialChar = "@#$%&*|^";
  const numbers = "0123456789";
  const userInputValue = userInput.value;
  let charFound = false;
  let numberGot = false;
  const getSingleCharFromInput = userInputValue.split("");

  for (const x of getSingleCharFromInput) {
    if (specialChar.includes(x)) {
      charFound = true;
    } if (numbers.includes(x)) {
      numberGot = true;
    }
  }

  indicatePara.innerText = charFound ? "Contains Special Char" : "";
  numberFound.innerText = numberGot ? "Number Found" : "";

  if (userInputValue.trim() === "") {
    worningPara.innerText = "";
  } else if (userInputValue.length < 6) {
    worningPara.innerText = "Too Short";
    worningPara.style.color = "red";
  } else if (userInputValue.length <= 10) {
    worningPara.innerText = "Medium";
    worningPara.style.color = "orange";
  } else {
    worningPara.innerText = "More Powerfull";
    worningPara.style.color = "green";
  }
});
