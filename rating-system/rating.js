const mainContainer = document.getElementById("star-container");

const allStarIcon = document.getElementsByClassName("fa-star");
const showRating = document.createElement("p");
const body = document.getElementById("body");
body.appendChild(showRating);

for (const x of allStarIcon) {
  x.addEventListener("mouseover", function () {
    mainContainer.classList.add("star-hover");
  });

  x.addEventListener("mouseleave", function () {
    mainContainer.classList.remove("star-hover");
  });
}

mainContainer.addEventListener("click", function (event) {
  const targetElement = event.target;
  if (targetElement.classList.contains("fa-star")) {
    targetElement.classList.toggle("star-gold");
  }

  event.stopPropagation();
});
