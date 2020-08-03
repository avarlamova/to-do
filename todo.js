
const tasks = document.getElementById("list");
//let taskDone = document.getElementById("checkbox").checked;

//editing the task
function editTask() {
    let a = event.target;
    a.previousSibling.previousSibling.textContent = prompt("Отредактируйте запись");
}

//deleting the task
function deleteItem () {
    let d = event.target;
    d.parentNode.remove();
}

//adding new task
function addTask() {
    
    const li = document.createElement('li');
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const textNode = document.createTextNode('');
    const newItem = document.createElement("span");
    newItem.textContent = ' ' + input.value;
    newItem.className = "changeifchecked";

    const editbtn = document.createElement("button");
    editbtn.textContent = 'Редактировать';
    editbtn.className = "edit-btn"
    checkbox.type = "checkbox";
    editbtn.onclick = editTask;

    const removebtn = document.createElement("button");
    removebtn.textContent = "Удалить";
    removebtn.onclick = deleteItem;

    list.append(li);
    li.append(checkbox);
    li.append(textNode);
    li.append(newItem);
    li.append(editbtn);
    li.append(removebtn);
    input.value = "";
    }

    //adding task on enter
window.addEventListener("keydown", function(e) {
        if (e.keyCode == 31) {
            addTask();
        }
    },
);
        
//deleting the whole list
function clearList() {
    list.innerHTML = "";
    }

//open and close info

function openInfo() {    
    let info = document.getElementById('info');
    let helpbtn = document.getElementById('help-btn');
    info.style.display = "block";
    helpbtn.style.display = "block";
    }

function closeInfo () {
    let info = document.getElementById('info');
    let helpbtn = document.getElementById('help-btn');
    info.style.display = "none";
    helpbtn.style.display = "none";
}


