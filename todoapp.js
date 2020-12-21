// todo app
// ** WIP ** 12182020


function myFunction() {
    var newNode = document.createElement("LI");
    var x = document.getElementById("newTodo").value;
    var textNode = document.createTextNode(x);
    newNode.appendChild(textNode);
    document.getElementById("todoList").appendChild(newNode);
}













// todoList.forEach(myFunction)

// // add item
// function addTodo(a) {
//     let newItem = a;
//     todoList.push(newItem);
//     console.log(todoList);
// }

// // remove item
// function removeTodo(a) {
//     let removeItem = a;
//     todoList.splice(removeItem);
// }

