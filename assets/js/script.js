// browser listens to events happening on entire form
var formEl = document.querySelector("#task-form");

// tasks displayed
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create new task by clicking Enter
var createTaskHandler = function(event) {
    // prevent browser from refreshing after pressing Enter
    event.preventDefault();

    // capture Task Name input and display in li
    var taskNameInput = document.querySelector("input[name='task-name']").value;

    // capture Task Type input and display under Task Name
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // div class
    taskInfoEl.className = "task-info";
    // add HTML to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// create new task by clicking submit button
formEl.addEventListener("submit", createTaskHandler);