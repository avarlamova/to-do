const tasks = document.querySelectorAll("li");

document.getElementById("input").addEventListener('change', function addTask() { 
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    newItem.id = "item";
    list.append(newItem);
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
