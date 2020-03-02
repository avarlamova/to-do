let tasks = ["Сделать домашку", "Искупать кота", "Купить сельдерей"];
function addTask() {
    let newTask = prompt("Добавить новое важное дело", "введите задание");
    tasks.push(newTask);
    alert (tasks);
}

