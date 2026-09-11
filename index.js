let tasks = [];

function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        let stepNum = tasks.length - i;

        html += `
            <li class="task-item">
                <div class="step-number">${stepNum}</div>
                <div class="task-content">
                    <span class="task-text">${tasks[i]}</span>
                    <button class="remove-btn" onclick="removeTask(${i})" title="Remove Task"><i class="fas fa-times"></i></button>
                </div>
            </li>
        `;
    }
    document.getElementById("list").innerHTML = html;
}

function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value.trim();
    if (text === "") {
        return;
    }
    tasks.unshift(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

function clearAll() {
    tasks = [];
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
    }
    displayTasks();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

// Initial load
loadTasks();