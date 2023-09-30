let table = document.getElementById("table");
let addButton = document.getElementById("add");
let inputBox = document.getElementById("inputBox");
let counter = 0;

function addTaskToList() {
  let date = new Date();
  let date2 = date.toLocaleDateString("en-uk", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  let ul = document.createElement("ul");
  table.appendChild(ul);
  ul.style.cssText =
    "font-size: 20px; display:flex;  justify-content:space-around";

  let li = ul.appendChild(document.createElement("li"));
  let removeButton = document.createElement("button");
  removeButton.textContent = "Delete";

  li.innerHTML = inputBox.value + " " + date2;
  removeButton.style.cssText =
    " width:55px; height: 25px ;background-color: #a2d2ff ; border: solid blue 2px; border-radius: 50%; ";
  let data = document.getElementById("inputBox").value;
  counter++;
  localStorage.setItem(`data ${counter}`, data);

  removeButton.addEventListener("click", function () {
    ul.removeChild(li);
    ul.removeChild(removeButton);
  });

  ul.appendChild(removeButton);

  inputBox.value = "";
}

addButton.addEventListener("click", addTaskToList);

inputBox.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addTaskToList();
  }
});
