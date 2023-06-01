import Project from "./project";
import Task from "./task";

const addTaskButton = document.querySelector('.add-task-btn');
let content = document.querySelector('.content')
const taskContainer = document.createElement('div')
const textBox = document.createElement('input')
const addBtn = document.createElement('button')
const closeBtn = document.createElement('button')
const taskList = document.querySelector('.task-list')
   

function closeTaskEvent() {
    textBox.value = ""
    taskContainer.style.display = 'none';
    addTaskButton.style.display = 'flex'
}

function addTaskEvent() {
    const newTask = new Task() 
    newTask.setName(textBox.value)
    newTask.setPriority("High Priority")
    newTask.setParent(taskList)
    closeTaskEvent(taskContainer)
}

function createTaskElements() {
    addTaskButton.style.display = 'none'
    taskContainer.classList.add('task-popup')
    taskContainer.style.display = 'grid';
    textBox.type = 'text'
    textBox.placeholder = 'add task'
    addBtn.textContent = 'Add'
    closeBtn.textContent = 'Close'
    
    content.appendChild(taskContainer)
    taskContainer.appendChild(textBox)
    taskContainer.appendChild(addBtn)
    taskContainer.appendChild(closeBtn)
}

closeBtn.addEventListener('click', () => {
    closeTaskEvent()
})

addBtn.addEventListener('click', () => {
     if (textBox.value === '') {
        alert('Task can not be empty')
    } else {
        addTaskEvent()
     }
})

//Remove task items from task list
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('complete-task-btn')) {
    console.log('Task completed');
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});

addTaskButton.addEventListener('click', () => {
    console.log('Added task')
    createTaskElements()
})


/* export default function CreateTaskEvent(){ 
    addTaskButton.addEventListener('click', () => {
        console.log('Added task')
        createTaskElements()
    })
}
 */
