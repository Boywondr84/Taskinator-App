// window.document.querySelector("button").textContent;
// document.createElement("li");
// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// taskItemEl;
// console.log(taskItemEl);
// console.log(taskItemEl.textContent);
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// console.log(tasksToDoEl);
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}
buttonEl.addEventListener("click", createTaskHandler);

    
tasksToDoEl.appendChild(taskItemEl);

taskItemEl.className = "task-item";