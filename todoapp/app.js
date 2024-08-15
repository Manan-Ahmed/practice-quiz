
let todoList = document.querySelectorAll(".todo-list")[0]
let inpEl = document.querySelectorAll(".inp")




let allTodos = []

function add() {
    let userTodo = inpEl[0].value
    allTodos.push(userTodo)
    printAllTodo()
    inpEl[0].value = ''
}


function printAllTodo() {
    todoList.innerHTML = ''
    for (let i = 0; i < allTodos.length; i++) {
        todoList.innerHTML += `
        
        <p>${allTodos[i]}
        <button onclick="edit(${i})">edit</button>
                <button onclick="delet(${i})">delete</button>
</p>
        `
    }

}



function delet(todo) {
    allTodos.splice(todo, 1)
    printAllTodo()
}

let addTodoContainer = document.querySelectorAll("#add-todo-container")[0]
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0]
let editForm = document.querySelectorAll(".inpt")[0]
let errorEl = document.querySelectorAll(".error")[0]
let editIndex
const edit = (index) => {
    if (isEditing) {
        displayError()
    }
    else {

        toggleTodo()
        editIndex = index
        editForm.value = allTodos[index]

    }
}

const save = () => {
    toggleTodo()
    allTodos.splice(editIndex, 1, editForm.value)
    printAllTodo()

}

const delt = (index) => {
    allTodos.splice(index, 1)
    printAllTodo()
}



let isEditing = false

function toggleTodo() {
    if (isEditing) {
        addTodoContainer.className = " "
        editTodoContainer.className += "hide"
    }
    else {
        addTodoContainer.className += " hide"
        editTodoContainer.className = " "
    }

    isEditing = !isEditing
}


function displayError() {
    errorEl.innerHTML = `please save your current todo`
    setTimeout(() => {
        errorEl.innerHTML = ""
    }, 3000)
}

































// let inpEl = document.querySelectorAll("input")[0]
// let todoListDiv = document.querySelectorAll(".todo-list")[0]









// let allTodos = []
// function submit(){
//      let newTodo = inpEl.value
//      allTodos.push(newTodo)
//      printAllTodo()
//      inpEl.value = ''
// }

// function printAllTodo(){
//         todoListDiv.innerHTML = ''
//     for(let i = 0;i < allTodos.length;i++){
//         todoListDiv.innerHTML += `
//         <p>${allTodos[i]}
//         <button onclick=editTodo(${i})>Edit</button>
//                 <button onclick=deleteTodo(${i})>Delete</button>
// </p>
//         `
//     }
// }


// function deleteTodo(index){
//      allTodos.splice(index,1)
//      printAllTodo()
// }

// let addTodoDiv = document.querySelectorAll(".add-todo-container")[0]
// let editTodoDiv = document.querySelectorAll(".edit-todo-container")[0]
// let editInput = document.querySelectorAll(".edit-todo")[0]


// let editIndex;
// const editTodo = (index)=>{
//     if(isEdit){
//     displayError()
//     }
//     else{
//         toggleTodo()
//     editInput.value = allTodos[index]
//     editIndex = index
// }
// }

// const save = () =>{
//     toggleTodo()
//     allTodos.splice(editIndex,1,editInput.value)
//     printAllTodo()
// }


// let isEdit = false;
// const toggleTodo = ()=>{
//     if(isEdit){
//         addTodoDiv.className = ''
//         editTodoDiv.className = 'hide'
//     }
//     else{
//          addTodoDiv.className = 'hide'
//         editTodoDiv.className = ''
//     }
//     isEdit = !isEdit
// }




// let errorEl = document.querySelectorAll(".error-msg")[0]

// const  displayError = ()=>{
//     errorEl.innerHTML = 'correct todo'
//     setTimeout(()=>{
//         errorEl.innerHTML = ''

//     },3000)
// }



































