// todo app

function createInput() {
    const mainContainer = document.getElementById("inputDiv")

    const newSubmitButton = document.createElement("INPUT");
    newSubmitButton.setAttribute("type", "button");
    newSubmitButton.setAttribute("value", "+");
    newSubmitButton.setAttribute("class", "actionButton");
    newSubmitButton.addEventListener('click', submitAndRefresh); //working here

    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "What do you need to do? ");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "newTodoInput");

    mainContainer.appendChild(newSubmitButton);
    mainContainer.appendChild(newInput);

    function submitAndRefresh() { // check for empty string

        submitNewTodo();
        newInput.value = '';
    };

};

function submitNewTodo() {
    const newTodoItem = document.createElement("LI");
    newTodoItem.setAttribute("class", "listElements")
    const returnTodo = document.getElementById("newTodoInput");
    const todoTextValue = document.createTextNode(returnTodo.value);

    const todoDeleteButton = document.createElement("BUTTON")
    todoDeleteButton.textContent = "x";
    newTodoItem.appendChild(todoDeleteButton);
    todoDeleteButton.setAttribute("class", "actionButton");
    todoDeleteButton.addEventListener('click', removeTodo)


    newTodoItem.appendChild(todoTextValue);
    newTodoItem.addEventListener('click', toggleStrike);

    function toggleStrike() {
        newTodoItem.classList.toggle("strikeMeDown");
    };



    function removeTodo() {
        newTodoItem.remove();
    }

    document.getElementById("todoList").appendChild(newTodoItem);
};

createInput();

