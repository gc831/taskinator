var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listenItemE1 = document.createElement("li");
    listenItemE1.className = "task-item";
    listenItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listenItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);
