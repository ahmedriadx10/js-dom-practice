const allAnswer = document.getElementsByClassName("question-answer");

const mainContainer = document.getElementById("main-container");

function displayReset() {
  for (const x of allAnswer) {
    x.style.display = "none";
  }
}

displayReset();

mainContainer.addEventListener("click", function (event) {
  const targetElement = event.target;
  if (targetElement.classList.contains("question")) {
    displayReset();
    targetElement.nextElementSibling.style.display = "block";
  }
});
