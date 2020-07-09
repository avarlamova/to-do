const tasks = document.querySelector("list");
let taskDone = document.getElementsByTagName("checkbox").checked;

document.getElementById("input").addEventListener('change', function addTask() {
    let li = document.createElement('li');
    let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
    let edit = document.createElement("button");
    edit.innerHTML = 'Редактировать';
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    let removeItem = document.createElement("button");
    removeItem.innerHTML = "Удалить";
    removeItem.onclick = function deleteElement() {
        newItem.remove();
        checkbox.remove();
        edit.remove();
        removeItem.remove();
        }

  //  let edit = document.createElement("button");
    edit.innerHTML = 'Редактировать';
    edit.onclick = function editNew() {
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

function getHelp() {
    const help = document.createElement("div");
    help.id = "help";
    help.innerHTML = 'Здесь будет справка';
    const closebutton = document.createElement("button");
    closebutton.innerHTML = "Закрыть";
    closebutton.id = "closebutton";
    let buttons = document.getElementById('buttons')
    buttons.append(help);
    buttons.append(closebutton);
    closebutton.addEventListener("click", function hide() {
        help.hidden = true;
        closebutton.hidden = true;
    }
        )
}

document.getElementById("clear-button").addEventListener("click", function clearList() {
    list.innerHTML = "";
    }
)


//close info
window.addEventListener("keydown", function checkEscape(e) {
    if (e.keyCode == 27) {
        help.hidden = true;
        closebutton.hidden = true;
    }
},
);

