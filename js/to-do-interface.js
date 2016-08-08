
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





    // var dueDate = $('#dueDate').val();
    // $('#dueDate').val("");
});
