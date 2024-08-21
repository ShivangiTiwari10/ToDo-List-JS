const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  // Prevent form from subbmitting
  event.preventDefault();

  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //  Create new li
  const newtoDo = document.createElement("li");
  newtoDo.innerText = todoInput.value;
  newtoDo.classList.add("todo-item");
  todoDiv.appendChild(newtoDo);

  //   Checkmark button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class= "fas fa-check" ></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //   trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class= "fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //   Append TodoList

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //  DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
