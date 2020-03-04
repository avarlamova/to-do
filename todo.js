let tasks = document.querySelectorAll("li");


function addTask() {
    const newItem = document.createElement("li");
    newItem.textContent = document.querySelector("input[type='text']").value;
    list.append(newItem);
   }
function clearList () {
      list.remove();
}

    function getHelp() {

    }
