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
    help.classList.add("help");
    help.innerHTML = 'Здесь будет справка';
    alert(help);
    }
