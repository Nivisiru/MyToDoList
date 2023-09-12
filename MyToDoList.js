document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todoList");
    const addTodoButton = document.getElementById("addTodoButton");
  
    addTodoButton.addEventListener("click", function() {
      const taskInput = document.getElementById("task");
      const taskText = taskInput.value;
  
      // if (taskText !== "") {
        const newTodo = document.createElement("li");
        newTodo.innerText = taskText;
  
        const removeButton = document.createElement("button");
        removeButton.innerText = "x";
  
        newTodo.appendChild(removeButton);
        todoList.appendChild(newTodo);
  
        taskInput.value = "";
      }
    });
  
    todoList.addEventListener("click", function(e) {
      const target = e.target;
        target.parentElement.remove();
      
    });
  });