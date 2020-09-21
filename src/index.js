document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById('new-task-description');
  const list = document.getElementById('list');
  const addTask = document.createElement("li");

  function addTaskToListen () {
  addTask.appendChild(document.createTextNode(task.value));
  list.appendChild(addTask);
  }

  document.querySelector('#submit-task').addEventListener("click", function(e) {
   e.preventDefault();
  addTaskToListen();
}, false);
});
