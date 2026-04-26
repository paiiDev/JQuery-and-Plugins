$(document).ready( function () {
    console.log("Document is ready!");
    fetchTasks().done(function(data) {
        console.log("Fetched tasks:", data);
         renderTasks(data.data);
    })
});

$("#addBtn").click(function () {
    console.log("Add button clicked!");
    const taskText = $("#taskInput").val();

    if (taskText.trim() == "") return;

    createTask(taskText).done(function(newTask) {
        addTaskToUI(newTask.todo);
        $("#taskInput").val("");
    });


})