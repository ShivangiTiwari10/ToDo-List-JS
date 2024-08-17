const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todobutton.addEventListener("click", addTodo);

function addTodo(event) {
  // Prevent form from subbmitting
  event.preventDefault();

  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //  Create new li
  const newtoDo = document.createElement("li");
  newtoDo.innerText = "hey";
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

  todolist.appendChild(todoDiv);
}
