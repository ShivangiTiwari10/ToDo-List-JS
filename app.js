const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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

  // ADD TODO TO LOCAL STORAGE
  saveLocalTodo(todoInput.value);

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

    // Animation
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // checkmark TODO
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        console.log("All");
        todo.style.display = "flex";
        break;
      case "complete":
        if (todo.classList.contains("complete")) {
          console.log("complete");
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("complete")) {
          console.log("Uncompleted");
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodo(todo) {
  // CHECK  hEY DO I HAVE THING ALREADY THERE
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  console.log("Hello")
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //  Create new li
    const newtoDo = document.createElement("li");
    newtoDo.innerText = todo;
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
  });
}
