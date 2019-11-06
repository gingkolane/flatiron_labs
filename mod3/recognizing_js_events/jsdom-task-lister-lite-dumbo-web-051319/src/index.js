const form = document.getElementById(“create-task-form”);
const taskList = document.getElementById(“tasks”);

form.addEventListener(“submit”, function(event){
  event.preventDefault()
  
  const newTask = document.getElementById(“new-task-description”).value;
  const taskLi = document.createElement(“li”);

  taskList.append(newTask, taskLi);
});

