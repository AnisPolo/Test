"use strict";

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Task cannot be empty.");
  } 

  const li = document.createElement("li");

  li.innerHTML = `
      <span onClick="completeTask(this)">${taskText}</span>
      <div class="task-buttons">
        <button onClick="editTask(this)">Edit</button>
        <button onClick="deleteTask(this)">Delete</button>
      </div>
    `;
  document.getElementById("taskList").appendChild(li);
  input.value = ""; 
} 
function deleteTask(button) {
  button.closest("li").remove();
}


function completeTask(span) {
  span.classList.toggle("task-completed");
  alert(`Task "${span.textContent}" marked as ${span.classList.contains("task-completed") ? "completed" : "incomplete"}.`);

} 
function editTask(button) {
  const li = button.closest("li");
  let span = li.querySelector("span"); 
  const input = li.querySelector("input");

  if (input) {
    const newText = input .value.trim();
    if (!newText) {
      alert("Task cannot be empty.");
      return;
    }
    span = document.createElement("span");
    span.setAttribute("onClick", "completeTask(this)"); 
    span.textContent = newText;
    input.replaceWith(span);
    button.textContent = "Edit";
    return;
  }

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = span.textContent;
  editInput.className = "edit-input";

  span.replaceWith(editInput);

  button.textContent = "Save";

  editInput.focus();

}



