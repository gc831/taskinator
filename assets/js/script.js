var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
//   preventDefault stops the web browser from refreshing
  event.preventDefault();
// used console.dir(); to find the values below
// grabs data from the input fields
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

// creates a list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

// creates a div element to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
// give the div a class name
  taskInfoEl.className = "task-info";
// add html content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
 
  listItemEl.appendChild(taskInfoEl);

//   add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  }; 

  formEl.addEventListener("submit", createTaskHandler);