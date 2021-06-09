var ToDoList;
var Task;
var Todo;
var Tasktodo;
var checkBtn;
var deleteBtn;
var check;

function Add () {

    Task = document.getElementById('Task').value;

    if ( Task != "" ) {

        ToDoList = document.getElementById('ToDoList');

        Todo = document.createElement('div');

        Tasktodo = document.createElement('li');
        Tasktodo.textContent = Task;

        checkBtn = document.createElement('button');
        checkBtn.onclick = Completed;

        deleteBtn = document.createElement('button');
        deleteBtn.onclick = Delete;

        lineBreak1 = document.createElement('br');
        lineBreak2 = document.createElement('br');

        Todo.appendChild(Tasktodo);
        Todo.appendChild(checkBtn);
        Todo.appendChild(deleteBtn);
        Todo.appendChild(lineBreak1);
        Todo.appendChild(lineBreak2);

        ToDoList.appendChild(Todo);

        document.getElementById('Task').value = "";

        Tasktodo.className = "TaskToDo";
        checkBtn.className = "checkBtn";
        deleteBtn.className = "deleteBtn";

    }

}

// didnt understand these

function Delete (e) {
    let ToDoItem = e.target.parentNode;
    let parent = ToDoItem.parentNode;
    parent.removeChild(ToDoItem);
}

function Completed (e) {
    let ToDoItem = e.target.parentNode;
    ToDoItem.id = "TaskCompleted";
}