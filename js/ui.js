function renderTasks(tasks) {
    $("#tasklist").empty();

    tasks.forEach(task => {
        $("#taskList").append(`<li>${task.todo}</li>`)
    });
}

function addTaskToUI(task) {
    $("#taskList").append(`<li>${task.todo}</li>`)
}