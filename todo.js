let tasks = document.querySelectorAll("li");

document.getElementById("input").onchange = function addTask (){ 
    const newItem = document.createElement("li");
    newItem.textContent = document.getElementById("input").value;
    list.append(newItem);
    document.getElementById("input").value = "";

   }
function clearList () {
      list.remove();
}

    function getHelp() {
    const help = document.createElement("div");
    help.id = "help";
    help.innerHTML = 'Здесь будет справка';
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Закрыть";
    closeButton.id = "closebutton";
    buttons.append(help);
    buttons.append(closeButton);
}


document.getElementById("closebutton").onclick = function () {
    //document.getElementByClassName("help").hidden = true;
}
