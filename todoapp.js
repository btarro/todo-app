// todo app
// ** WIP ** 12182021

// This needs to be cleaned up
function createInput() {
    const mainContainer = document.getElementById("inputDiv")

    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "What do you need to get done? ");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "newTodoInput");

    const newSubmitButton = document.createElement("INPUT");
    newSubmitButton.setAttribute("type", "button");
    newSubmitButton.setAttribute("value", "Submit");
    newSubmitButton.addEventListener('click', submitAndRefresh); //working here

    mainContainer.appendChild(newInput);
    mainContainer.appendChild(newSubmitButton);

    function submitAndRefresh() {
        submitNewTodo();
        newInput.value = '';
    };

};

function freshInput() {
    submitNewTodo();
    //createInput();
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

    const todoDeleteButton = document.createElement("BUTTON")
    todoDeleteButton.textContent = "Delete";
    newTodoItem.appendChild(todoDeleteButton);
    todoDeleteButton.addEventListener('click', removeTodo)

    function removeTodo() {
        newTodoItem.remove();
    }

    document.getElementById("todoList").appendChild(newTodoItem);
};


// function submitNewTodo() {
//     const newTodoItem = document.createElement("LI");
//     const returnTodo = document.getElementById("newTodoInput");
//     const todoTextValue = document.createTextNode(returnTodo.value);

//     newTodoItem.appendChild(todoTextValue);
//     newTodoItem.addEventListener('click', toggleStrike);

//     function toggleStrike() {
//         newTodoItem.classList.toggle("strikeMeDown");
//     };

//     let btn = document.createElement("BUTTON")
//     btn.textContent = "Delete";
//     newTodoItem.appendChild(btn);
//     btn.addEventListener('click', removeTodo)

//     function removeTodo() {
//         newTodoItem.remove();
//     }

//     document.getElementById("todoList").appendChild(newTodoItem);
//     document.getElementById("todoForm").reset();  // Are we still using a form?
//     document.getElementById("newTodoInput").reset();
// };


createInput();

