const API_URL = " https://localhost:7062/api/todos";

//read
function fetchTasks() {
  return $.get(API_URL + "?_limit=5");
}

//create
// function createTask(task) {
//   return $.post(API_URL, {
//     id: task.length+1,
//     todo: task,
//     completed: true,
//     userId: 0,
//   });
// }

function createTask(task) {
    return $.ajax({
        url: API_URL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            todo: task,
            completed: false,
            userId: 1
        })
    });
}

