const todoList = document.getElementById('todo-list');

function handleSubmit(){
//get value of input
    const todo = document.getElementById('todo-input').value;
    //if there was input, set the input to '' and makeTodoTr
    if(todo){
        makeTodoTr(todo);
        document.getElementById('todo-input').value = '';
    }else{
    //if no input, ask for input, politely
        alert('Please enter a todo');
    }
}
//function for adding rows
function makeTodoTr(todo){
    //create row and cell for BS table row
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    //Add text to cell
    td.innerText = todo;
    //add cell to row
    tr.appendChild(td);
    //add padding to row
    tr.classList.add('pt-1');

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList.add('btn', 'btn-danger')
    //add event listener to remove row on click
    deleteButton.onclick = function(){
        tr.remove();
    }
    //add button to row
    tr.appendChild(deleteButton);
    todoList.appendChild(tr);
    //add Row to todoList table
}
//when the dom loads, add event listeners to the button and input, for click and 'enter' functionality, respectively.
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('add-todo').onclick = handleSubmit;
    document.getElementById('todo-input').addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            handleSubmit();
        }
    });
});