const inputBOX = document.getElementById("inputBOX");
const listContainer = document.getElementById("list-container");
const addBTN = document.querySelector(".addtask");
const topTITLE = document.querySelector("h2");
const newTask = document.createElement("li");
const forKEY = document.querySelector("body");

loadData();

addBTN.addEventListener("click", function (e) {
  const newTask = document.createElement("li");

  if (inputBOX.value == "") {
    topTITLE.textContent = "Please add a Task First 📝";
  } else {
    newTask.textContent = inputBOX.value;
    listContainer.appendChild(newTask);
    topTITLE.textContent = "Sticky To-Do!📝";

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    newTask.appendChild(span);
  }
  inputBOX.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("mark");
      saveData();
    }
  },
  false
);

// File Handling For Saving Data in Browser
function saveData() {
  localStorage.setItem("BASEDATA", listContainer.innerHTML);
}
function loadData() {
  listContainer.innerHTML = localStorage.getItem("BASEDATA");
}

// When Pressed Enter, Add's New TODO
forKEY.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    const newTask = document.createElement("li");

    if (inputBOX.value == "") {
      topTITLE.textContent = "Please add a Task First 📝";
    } else {
      newTask.textContent = inputBOX.value;
      listContainer.appendChild(newTask);
      topTITLE.textContent = "Sticky To-Do!📝";

      let span = document.createElement("span");
      span.textContent = "\u00d7";
      newTask.appendChild(span);
    }
    inputBOX.value = "";
    saveData();
  }
});
