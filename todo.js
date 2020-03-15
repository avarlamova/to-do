const tasks = document.getElementById("list");

    tasks[i].addEventListener("click", function removeTask () {
        tasks[i].remove();
    })
document.getElementById("input").addEventListener('change', function addTask() { 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const newItem = document.createElement("span");
    newItem.textContent = input.value;
    newItem.id = "item";
    const br = document.createElement('br')
    list.append(checkbox);
    list.append(newItem);
    list.append(br);
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
