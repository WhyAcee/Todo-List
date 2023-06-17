import Task from "./task";
import Project from "./project";
import projectManager from "./projectManager";

const addTaskButton = document.querySelector('.add-task-btn');
const addProjectButton = document.querySelector('#add-project-btn');
let content = document.querySelector('.content')
let contentTitle = document.querySelector('#content-title')
let projectsSection = document.querySelector('.projects')

// Tasks
const taskContainer = document.createElement('div')
const taskTextBox = document.createElement('input')
const addTaskBtn = document.createElement('button')
const closeTaskBtn = document.createElement('button')
const taskList = document.querySelector('.task-list')

// Projects
const projectContainer = document.createElement('div')
const projectTextBox = document.createElement('input')
const addProjectBtn = document.createElement('button')
const closeProjectBtn = document.createElement('button')
const projectList = document.querySelector('.projects-list')
const projects = new projectManager()

// Home buttons
const inboxButton = document.querySelector('#inbox')

// Default Project
const inboxProject = new Project()

// Change tab events
function changeToNewTab(tab) {
    contentTitle.textContent = tab.getName()
    projects.setIndex(tab)
    projects.getIndex().createTaskElements(taskList)
}

function InboxTab() {
    console.log(inboxProject.tasks)
    contentTitle.textContent = 'Inbox'
    taskList.textContent = ''
    inboxProject.createTaskElements(taskList)
}
  
// Close events
function closeTaskEvent() {
    taskTextBox.value = ""
    taskContainer.style.display = 'none';
    addTaskButton.style.display = 'flex'
}

function closeProjectEvent() {
    projectTextBox.value = ""
    projectContainer.style.display = 'none';
    addProjectButton.style.display = 'flex'
}
// Add Events
function addTaskEvent() {
    const newTask = new Task() 
    newTask.setName(taskTextBox.value)
    newTask.setParent(taskList)
    projects.getIndex().addTask(newTask)
    newTask.setProjectOwner(projects.getIndex(), newTask)
    inboxProject.addTask(newTask)
    newTask.complete.addEventListener('click', () => {
        inboxProject.removeTask(newTask)
        inboxProject.container.remove()
    })
    closeTaskEvent(taskContainer)
}

function addProjectEvent() {
    const newProject = new Project() 
    newProject.setName(projectTextBox.value)
    newProject.setParent(projectList)
    newProject.getContainer().addEventListener('click', () => {
        changeToNewTab(newProject)
    })
    closeProjectEvent(projectContainer)
}

// Create elements
function createTaskElements() {
    addTaskButton.style.display = 'none'
    taskContainer.classList.add('task-popup')
    taskContainer.style.display = 'grid';
    taskTextBox.type = 'text'
    taskTextBox.placeholder = 'add task'
    addTaskBtn.textContent = 'Add'
    closeTaskBtn.textContent = 'Close'
    
    content.appendChild(taskContainer)
    taskContainer.appendChild(taskTextBox)
    taskContainer.appendChild(addTaskBtn)
    taskContainer.appendChild(closeTaskBtn)
}

function createProjectElements() {
    addProjectButton.style.display = 'none'
    projectContainer.classList.add('project-popup')
    projectContainer.style.display = 'grid';
    projectTextBox.type = 'text'
    projectTextBox.placeholder = 'add project'
    addProjectBtn.textContent = 'Add'
    closeProjectBtn.textContent = 'Close'
    
    projectsSection.appendChild(projectContainer)
    projectContainer.appendChild(projectTextBox)
    projectContainer.appendChild(addProjectBtn)
    projectContainer.appendChild(closeProjectBtn)
}

// Close/Add events
closeTaskBtn.addEventListener('click', () => {
    closeTaskEvent()
})

closeProjectBtn.addEventListener('click', () => {
    closeProjectEvent()
})

addTaskBtn.addEventListener('click', () => {
     if (taskTextBox.value === '') {
        alert('Task can not be empty')
    } else {
        addTaskEvent()
     }
})

addProjectBtn.addEventListener('click', () => {
     if (projectTextBox.value === '') {
        alert('Project can not be empty')
    } else {
        addProjectEvent()
     }
})
//Remove task items from task list
/* document.addEventListener('click', (event) => {
  if (event.target.classList.contains('complete-task-btn')) {
    console.log('Task completed');
    const taskItem = event.target.parentElement;
      taskItem.remove();
      inboxProject.removeTask()
  }
}); */

addTaskButton.addEventListener('click', () => {
    console.log('Added task')
    createTaskElements()
})

addProjectButton.addEventListener('click', () => {
    console.log('Added Project')
    createProjectElements()
})

inboxButton.addEventListener('click', () => {
    InboxTab()
})

InboxTab()


/* export default function CreateTaskEvent(){ 
    addTaskButton.addEventListener('click', () => {
        console.log('Added task')
        createTaskElements()
    })
}
 */

export { inboxProject }