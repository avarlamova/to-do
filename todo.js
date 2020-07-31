let tasks = document.getElementById("list");
let taskDone = document.getElementsByTagName("checkbox").checked;

document.getElementById("input").addEventListener('change', function addTask() {
    let li = document.createElement('li');
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let editbtn = document.createElement("button");
    editbtn.innerHTML = 'Редактировать';
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    let removeItem = document.createElement("button");
    removeItem.innerHTML = "Удалить";
    removeItem.onclick = function deleteEl() {
        newItem.remove();
        checkbox.remove();
        edit.remove();
        removeItem.remove();
        }

  //  let edit = document.createElement("button");
    edit.innerHTML = 'Редактировать';
    edit.onclick = function edit() {
        newItem.innerHTML = prompt("Отредактируйте запись");
    }
    const newItem = document.createElement("span");
    newItem.textContent = input.value;
    newItem.className = "changeifchecked";
    newItem.id = "item";
    list.append(li);
    list.append(checkbox);
    list.append(newItem);
    list.append(edit);
    list.append(removeItem);
    input.value = "";
    }
    )

document.getElementById("clear-button").addEventListener("click", function clearList() {
    list.innerHTML = "";
    }
)


//open and close info
    
let help = document.getElementById('get-help');
let info = document.getElementById('info');
let helpbtn = document.getElementById('help-btn');

help.addEventListener("click", function openInfo(){
        info.style.display = "block";
        helpbtn.style.display = "block";
    })

function closeInfo () {
    info.style.display = "none";
    helpbtn.style.display = "none";
}

window.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
        help.style.visible = true;
        closebutton.hidden = true;
    }
},
);

