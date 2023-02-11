document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let select = document.createElement("select");
  let label = document.createElement("label");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let option4 = document.createElement("option");
  let submitButton = document.querySelectorAll("input")[1];
  let dueDate = document.createElement("input");
  let label2 = document.createElement("label");
  let sortButton = document.createElement("button");
  let taskList = document.getElementById("list");
  sortButton.textContent = "Sort Alphabetically";
  sortButton.addEventListener("click", sortAlphabet);
  taskList.appendChild(sortButton);


  dueDate.type = "date";
  dueDate.name = "dueDateOfTask";
  dueDate.id = "dueDateBox";
  label2.for = "dueDateBox";
  label2.textContent = "Due Date: ";
  option1.textContent= "High";
  option1.value = "high";
  option2.textContent= "Medium";
  option2.value = "medium";
  option3.textContent= "Low";
  option3.value = "low";
  option4.textContent=" ";
  option4.value = "start";
  label.for = "priorityLevel";
  label.textContent = "Priority Level: "
  select.id = "priorityLevel"
  select.name = "priority";
  select.appendChild(option4);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  form.insertBefore(select, submitButton);
  form.insertBefore(label, select);
  form.insertBefore(dueDate, submitButton);
  form.insertBefore(label2, dueDate);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  })

  
  
  
  
  

});

function buildToDo (todo, date) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let nestedLi = document.createElement("li");
  let select = document.querySelector("select");
  let opt = select.value;
  let dateInput = document.querySelector("#dueDateBox");
  let dateVal = dateInput.value;
  let ul = document.createElement("ul");
  let checkBox = document.createElement("input");
  let checkLabel = document.createElement("label");
  checkBox.id = "checkIt";
  checkBox.type = "checkbox";
  checkLabel.for = "checkIt";
  checkLabel.textContent= "Check when task is complete: ";
  checkLabel.style.color = "black";
  checkBox.addEventListener("click", () => alert("Woohoo! Another task complete"));

  li.className = "taskItem"
  

  


  
  

  btn.textContent= "Delete";
  btn.addEventListener("click", handleDelete);
  nestedLi.textContent = `Due by: ${dateVal}`;
  ul.id = "datelist";
  li.textContent = `${todo} `;

  if (opt === "high") {
    li.style.color = "red";
  } else if (opt === "medium") {
    li.style.color = "yellow";
  } else if (opt === "low") {
    li.style.color = "green";
  }
  
  
  
  li.appendChild(ul);
  ul.appendChild(nestedLi);
  li.appendChild(checkLabel);
  li.appendChild(checkBox);
  li.appendChild(btn);
  
  

  document.querySelector("#tasks").appendChild(li);

}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function sortAlphabet() {
  let list = document.querySelector("#tasks");
  let items = list.childNodes;
  let itemsArr = [];

  for (let i in items) {
    if (items[i].nodeType ===1 ){
      itemsArr.push(items[i])
    }
  }
  itemsArr.sort(function (a,b) {
    return a.textContent === b.textContent ? 0: (a.textContent > b.textContent ? 1: -1);
  });

  for (i = 0; i < itemsArr.length;  ++i) {
    list.appendChild(itemsArr[i]);
  }
}