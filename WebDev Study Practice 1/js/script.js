var tasks = [];

document.getElementById('submitTask').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    addTask();
})

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
       deleteTask(e.target);
    }
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
    console.log("new task added: ", task);

    localStorage.setItem("task", task);

    tasks.push(task);
    taskInput.value = '';

    console.log("Current tasks: ", tasks);

    updateList();
}

function updateList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (task of tasks) {
        var li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    if (tasks.length === 0) {
        document.getElementById('noTasksMessage').style.display = 'block';
    } else {
        document.getElementById('noTasksMessage').style.display = 'none';
    }
}

deleteTask = function(taskItem) {
    var taskText = taskItem.textContent;
    tasks.splice(tasks.indexOf(taskText), 1);
    console.log("Deleted task: ", taskText);
    updateList();
}