/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;
var tasks = [];

$(document).ready(function(){
  var tasks = [];
  $('#home-tasks').submit(function(event){
    event.preventDefault();
    console.log("made it this far");
    var description = $("#task").val();
    $("#task").val("");
    var priority = $('#priority').val();
    $('#priority').val("");
    // var assignedTo = $('#assignment').val();
    // $('#assignment').val("");
    console.log(description);
    console.log(priority);
    tasks.push(new ToDoList.HomeTask(description, priority));
    tasks.forEach(function(task) {
      $('#list-tasks').append("<li> Home Task: " + task.description + "Priority: " + task.priority + "</li>");
    });
  });
});

// tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
// tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
// tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
// tasks[0].markDone();
//
// tasks.push(new ToDoList.HobbyTask("Practice origami."));
// tasks.push(new ToDoList.HobbyTask("Bake a pie."));
//
// var today = new Date();
// var current = new Date();
// var reallyCurrent = new Date();
// var tomorrow = current;
// tomorrow.setDate(current.getDate() + 1);
// var nextDay = reallyCurrent;
// nextDay.setDate(reallyCurrent.getDate() + 2);
//
// tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
// tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
//
// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
// for (var task of thorTasks) {
//   console.log(task);
// }
