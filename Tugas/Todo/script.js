let tasks = [];
let editIndex = -1;

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
            <div>
                <strong>${task.name}</strong><br>
                ${task.description}<br>
                <em>Deadline: ${task.deadline}</em>
            </div>
            <div>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(taskElement);
  });
};

const addTask = (event) => {
  event.preventDefault();
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDeadline = document.getElementById("taskDeadline").value;

  if (editIndex === -1) {
    tasks.push({
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
    });
  } else {
    tasks[editIndex] = {
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
    };
    editIndex = -1;
  }

  renderTasks();
  taskForm.reset();
  document.querySelector('button[type="submit"]').textContent = "Add Task";
};

const editTask = (index) => {
  const task = tasks[index];
  document.getElementById("taskName").value = task.name;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDeadline").value = task.deadline;
  editIndex = index;
  document.querySelector('button[type="submit"]').textContent = "Save Changes";
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

taskForm.addEventListener("submit", addTask);
renderTasks();
