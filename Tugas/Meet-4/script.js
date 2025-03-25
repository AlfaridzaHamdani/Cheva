let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const tasksElement = document.getElementById("tasks-list");

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const renderTasks = () => {
  tasksElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
                        <h3>${task.title}</h3>
                        <p>${task.desc}</p>
                        <p>${task.deadline}</p>
                        <button onclick="deleteTask(${index})">Delete</button>
                `;

    tasksElement.appendChild(taskElement);
  });
};

const addTask = () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;

  if (title.length > 1 && desc.length > 1 && deadline) {
    tasks.push({
      title,
      desc,
      deadline,
    });

    saveTasksToLocalStorage();
  }

  const clearInput = () => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("deadline").value = "";
  };

  clearInput();
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasksToLocalStorage();
  renderTasks();
};

// Initial render
renderTasks();
