const formElNew = document.getElementById('taskInput');
const formElList = document.getElementById('taskList');
const buttonElAdd = document.querySelector("button[type='submit']");
const buttonElClear = document.querySelector("button[type='reset']");
const newItemEl = document.getElementById('newItem');
const dueDateEl = document.getElementById('dueDate');

// const userName = prompt("Hello! What is your name?");
// window.onload = userName;
// if (userName !== null) {
//     document.getElementById("user").innerText = userName[0].toUpperCase()+userName.slice(1)+"'s To-Do List";
// }

function create(element) {
    return document.createElement(element);
}

function toDoItem(item, date) {
//Create checkbox:
    const checkbox = create('input');
    checkbox.type = "checkbox";
    checkbox.id="checkbox";
//Create labels:
    const label1 = create('label');
    label1.htmlFor = "checkbox";
    const label2 = create('label');
    label2.htmlFor = "checkbox";
    label1.innerHTML = item;
    label2.innerHTML = date;

//Create edit button:
    const edit = create('button');
    edit.innerHTML = "Edit";

//Create delete button:
    const del = create('button');
    del.innerHTML = "Delete";

//Add elements to html:
    buttonElClear.insertAdjacentElement("beforebegin", checkbox);
    checkbox.insertAdjacentElement("afterend",label1);
    label1.insertAdjacentElement("afterend", label2);
    label2.insertAdjacentElement("afterend", edit);
    edit.insertAdjacentElement("afterend", del);
}

//Adding or Deleting items from localStorage:
let tasksArray = [];
localStorage.setItem('tasks', JSON.stringify(tasksArray));
const tasks = JSON.parse(localStorage.getItem('tasks'));

function addItem(e) {
    e.preventDefault();
    if (newItemEl.value !== "") {
        tasksArray.push({newTask: newItemEl.value, dueBy: dueDateEl.value});
        tasks.forEach(({newTask, dueBy}) => {
            return toDoItem(newTask, dueBy);
          });
    } else {
        alert('Please add a new task.')
    }
    buttonElAdd.blur();
}

buttonElAdd.addEventListener("click", addItem);
buttonElClear.addEventListener("click", function () {
    localStorage.clear();
})