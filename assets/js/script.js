// browser listens to events happening on entire form
var formEl = document.querySelector("#task-form");

// tasks displayed
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create new task by clicking Enter
var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send object as argument
    createTaskEl(taskDataObj);
}

// creates new task HTML element
var createTaskEl = function(taskDataObj) {
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
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add list item to list
    tasksToDoEl.appendChild(listItemEl);

}

// create new task by clicking submit button
formEl.addEventListener("submit", taskFormHandler);