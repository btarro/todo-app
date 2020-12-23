// todo app
// ** WIP ** 12182021

function createInput() {
    const newInput = document.createElement(INPUT[placeholder = "text"]);
    document.getElementById("inputDiv").appendChild(newInput);
}

function submitNewTodo() {
    const newTodoItem = document.createElement("LI");
    const returnTodo = document.getElementById("newTodoInput");
    const todoTextValue = document.createTextNode(returnTodo.value);

    newTodoItem.appendChild(todoTextValue);
    newTodoItem.addEventListener('click', toggleStrike);

    function toggleStrike() {
        newTodoItem.classList.toggle("strikeMeDown");
    };

    let btn = document.createElement("BUTTON")
    btn.textContent = "Delete";
    newTodoItem.appendChild(btn);
    btn.addEventListener('click', removeTodo)

    function removeTodo() {
        newTodoItem.remove();
    }

    document.getElementById("todoList").appendChild(newTodoItem);
    document.getElementById("todoForm").reset();  // Are we still using a form?
    document.getElementById("newTodoInput").reset();
};


createInput();

