const tasks = document.getElementById("list");

window.addEventListener("keydown", function checkEscape(e) {
    if (e.keyCode == 27) {
        help.hidden = true;
        closebutton.hidden = true;
    }
},
);

document.getElementById("input").addEventListener('change', function addTask() {
    let li = document.createElement('li');
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    const newItem = document.createElement("span");
    newItem.textContent = input.value;
    newItem.id = "item";
    list.append(li);
    list.append(checkbox);
    list.append(newItem);
    input.value = "";
    }
    )

function taskDone() {
    document.getElementById("item").className = "strike";
}

function getHelp() {
    const help = document.createElement("div");
    help.id = "help";
    help.innerHTML = 'Здесь будет справка';
    const closebutton = document.createElement("button");
    closebutton.innerHTML = "Закрыть";
    closebutton.id = "closebutton";
    buttons.append(help);
    buttons.append(closebutton);
    closebutton.addEventListener("click", function hide() {
        help.hidden = true;
        closebutton.hidden = true;
    }
        )
}

function clearList() {
    list.remove();
}

window.addEventListener("keydown", function checkEscape(e) {
    if (e.keyCode == 27) {
        help.hidden = true;
        closebutton.hidden = true;
    }
}, 
);
