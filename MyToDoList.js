document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById("todoList");
  const addTodoButton = document.getElementById("addTodoButton");
  const taskInput = document.getElementById("task");

  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  function updateTodoList() {
    todoList.innerHTML = "";

    savedTodos.forEach((taskText, index) => {
      const newTodo = document.createElement("li");
      newTodo.innerText = taskText;

      const removeButton = document.createElement("button");
      removeButton.innerText = "x";

      removeButton.addEventListener("click", function () {
        savedTodos.splice(index, 1);
        updateTodoList();
        saveTodosToLocalStorage();
      });

      newTodo.appendChild(removeButton);
      todoList.appendChild(newTodo);
    });
  }

  function saveTodosToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  }

  updateTodoList();

  addTodoButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText !== "") {
      savedTodos.push(taskText);
      saveTodosToLocalStorage();

      taskInput.value = "";

      updateTodoList();
    }
  });

  todoList.addEventListener("click", function (e) {
    const target = e.target;
    target.parentElement.remove();

    const taskText = target.parentElement.innerText;
    const index = savedTodos.indexOf(taskText);
    if (index !== -1) {
      savedTodos.splice(index, 1);
      saveTodosToLocalStorage();
    }
  });
});