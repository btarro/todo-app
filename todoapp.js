// todo app
// ** WIP ** 12182021


function submitNewTodo() {
    let newNode = document.createElement("LI");
    let x = document.getElementById("newTodo").value;
    var textNode = document.createTextNode(x);
    newNode.appendChild(textNode);
    newNode.onclick = function () {
        newNode.classList.toggle("strikeMeDown");
        let btn = document.createElement("BUTTON")
        btn.innerHTML = "X";
        newNode.appendChild(btn);
        btn.onclick = function () {
            newNode.remove();
        }
    };
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

