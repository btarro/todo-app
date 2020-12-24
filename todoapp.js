// todo app


// Notes for code review:
// 1. Originally I was leveraging an HTML input/'onClick' but decided to us JS to build the button element completely.
// 2. Retrospectively, I should have leveraged an array - it made using localstorage out of scope without 
// a refactor. (maybe?)


// Establish the todo input box & submit button logic
function createInput() {
    const mainContainer = document.getElementById("inputDiv")

    const newSubmitButton = document.createElement("INPUT");
    newSubmitButton.setAttribute("type", "button");
    newSubmitButton.setAttribute("value", "+");
    newSubmitButton.setAttribute("class", "actionButton");
    newSubmitButton.addEventListener('click', submitAndRefresh);

    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "Click here to add a todo.. ");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "newTodoInput");

    mainContainer.appendChild(newSubmitButton);
    mainContainer.appendChild(newInput);

    // input button action; validate text; input clear
    function submitAndRefresh() {
        let validateText = document.getElementById("newTodoInput").value;
        if (validateText == "") {
            return false;
        }
        submitNewTodo();
        newInput.value = '';
    };

};

// Create new list element based on input from createInput function
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

