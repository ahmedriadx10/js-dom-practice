const userInput = document.getElementById("usr-inp");
const addBtn = document.getElementById("add-btn");
addBtn.classList.add("btn");
const ul = document.getElementById("ul-data");
const p = document.createElement("p");
p.style.color = "red";
p.style.fontStyle = "italic";
p.style.fontWeight = "600";
const span = document.createElement("span");
const userColorInp = document.getElementById("color-inp");
const parentDiv = document.querySelector(".fruits-container");
const counterHead = document.getElementById("total-count-head");

function countTracker() {
  const totalFruits = document.getElementsByClassName("list-item").length;
  const completed = document.querySelectorAll(".checkInp:checked").length;
  counterHead.children[0].innerText = totalFruits;
  counterHead.children[1].innerText = completed;
}

function seePower(x) {
  console.log(x);
}

addBtn.addEventListener("click", function (event) {
console.log(event)

  if (!userInput.value || userInput.value.trim() === "") {
    p.innerText = "Empthy Fruits Name";
    userColorInp.value = "";
    parentDiv.appendChild(p);
  } else if (!userColorInp.value) {
    span.innerText = "Please Fill The Color";
    span.style.color = "red";
    userColorInp.value = "";
    userInput.value = "";
    parentDiv.appendChild(span);
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
          <input type='checkbox' class='checkInp'>
         <span class='fruit-name'>${userInput.value}</span><br>
          <button class='delete-btn'>Delete</button>
          <button class='fruit-edit'>Edit</button>
          `;

    li.classList.add("list-item");

    const userColor = userColorInp.value.toLowerCase();

    li.style.backgroundColor = userColor;
    ul.appendChild(li);
    userInput.value = "";
    p.innerText = "";
    span.innerText = "";
    userColorInp.value = "";
    countTracker();
  }
});

ul.addEventListener("click", function (event) {


  if (event.target.classList.contains("delete-btn")) {
    ul.removeChild(event.target.parentNode);
    countTracker();
  } else if (event.target.classList.contains("checkInp")) {
    const targetElement = event.target;
    const getParentFirstChild = targetElement.parentNode.children[1];

    if (event.target.checked) {
      getParentFirstChild.style.textDecoration = "line-through";
      countTracker();
    } else {
      getParentFirstChild.style.textDecoration = "none";
      countTracker();
    }
  }

  event.stopPropagation();
});
ul.addEventListener("dblclick", function (event) {
  const getParent = event.target.parentNode;
  console.log(getParent);
  parentFirstChild = getParent.children[1];
  if (getParent.children[4].classList.contains("fruit-edit")) {
    const runPrompt = prompt(parentFirstChild.innerText);
    parentFirstChild.innerText = runPrompt;
  }
  
});

const searchData = document.getElementById("search-value");
const getAllListusingClassName = document.getElementsByClassName("list-item");

searchData.addEventListener("input", function () {
  const searchFieldData = searchData.value.toLowerCase();

  for (const x of getAllListusingClassName) {
    const liFirstChild = x.children[1].innerText;

    if (liFirstChild.toLowerCase().includes(searchFieldData)) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
});

const modeBtn = document.getElementById("mode-btn");

modeBtn.classList.add("btn");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modeBtn.innerText = "Normal Mode";
  } else {
    modeBtn.innerText = "Dark Button";
  }
});
