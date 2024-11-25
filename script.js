// script.js
document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.querySelector(".add-task-btn");
  const editModal = document.getElementById("editModal");
  const editTaskInput = document.getElementById("editTaskInput");
  const editTaskTime = document.getElementById("editTaskTime");
  const saveTaskBtn = document.getElementById("saveTaskBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  let editTaskElement = null;

  // Add Task
  addTaskButton.addEventListener("click", () => {
    const taskText = prompt("Enter task description:");
    const taskTime = prompt("Enter task time (e.g., 9:00 AM):");

    if (taskText && taskTime) {
      createTask(taskText, taskTime);
    }
  });

  // Create Task
  function createTask(text, time) {
    const task = document.createElement("div");
    task.classList.add("task");

    const taskDetails = document.createElement("span");
    taskDetails.textContent = `${text} - ${time}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    editBtn.addEventListener("click", () => editTask(task, text, time));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", () => taskList.removeChild(task));

    task.appendChild(taskDetails);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
  }

  // Edit Task
  function editTask(task, text, time) {
    editModal.classList.remove("hidden");
    editTaskInput.value = text;
    editTaskTime.value = time;
    editTaskElement = task;
  }

  saveTaskBtn.addEventListener("click", () => {
    const newText = editTaskInput.value;
    const newTime = editTaskTime.value;

    if (newText && newTime) {
      editTaskElement.querySelector("span").textContent = `${newText} - ${newTime}`;
      editModal.classList.add("hidden");
    }
  });

  cancelEditBtn.addEventListener("click", () => {
    editModal.classList.add("hidden");
  });
});
