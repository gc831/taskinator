// # = element id=""
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 
//   preventDefault stops the web browser from refreshing
  event.preventDefault();
// used console.dir(); to find the values below
// grabs data from the input element fields
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

// check if input values are empty strings. Same as if (taskNameInput === "" || taskTypeInput === "")
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
}
formEl.reset();

// reset form fields for next task to be entered
document.querySelector("input[name='task-name']").value = "";
document.querySelector("select[name='task-type']").selectedIndex = 0;


// package up data as an object
var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput,
  };

// send taskDataObject as an argument to createTaskEl
  createTaskEl(taskDataObj);

}; 

var createTaskEl = function(taskDataObj) {
// creates a list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

// creates a div element to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
// give the div a class name
  taskInfoEl.className = "task-info";
// add html content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 
  listItemEl.appendChild(taskInfoEl);

// add entire list item to list. tasksToDoEl is the child
  tasksToDoEl.appendChild(listItemEl);
};
// 
  formEl.addEventListener("submit", taskFormHandler);