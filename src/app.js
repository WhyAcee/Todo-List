import Task from "./task";
import Project from "./project";
import projectManager from "./projectManager";
import Storage from "./storage";

const addTaskButton = document.querySelector('.add-task-btn');
const addProjectButton = document.querySelector('#add-project-btn');
let content = document.querySelector('.content')
let contentTitle = document.querySelector('#content-title')
let projectsSection = document.querySelector('.projects')

// Storage
const todoStorage = new Storage();

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
const todayButton = document.querySelector('#today')
const thisWeekButton = document.querySelector('#this-week')

// Default Projects
const inboxProject = new Project()
const todayProject = new Project()
const thisWeekProject = new Project()

inboxProject.setName('Inbox')
todayProject.setName('Today')
thisWeekProject.setName('This Week')

projects.addProject(inboxProject)
projects.addProject(todayProject)
projects.addProject(thisWeekProject)
console.log(projects.list)

// Change tab events
function changeToNewTab(tab) {
    contentTitle.textContent = tab.getName()
    projects.setIndex(tab)
    projects.getIndex().createTaskElement(taskList)
}

// Load tasks and projects from storage
function loadTasksAndProjects() {
    const loadedProjects = todoStorage.getProjects();
    loadedProjects.forEach(project => {
        const newProject = new Project();
        newProject.setName(project.title);
        newProject.setParent(projectList);
        projects.addProject(newProject);

        newProject.getContainer().addEventListener('mouseup', () => {
            changeToNewTab(newProject);
            addTaskButton.style.display = 'flex';
        });

        newProject.complete.addEventListener('click', () => {
            newProject.deleteTaskElements(thisWeekProject, todayProject);
            projects.removeProject(newProject);
            newProject.container.remove();

            changeToNewTab(inboxProject);

            todoStorage.deleteProject(newProject.getName())
         });
    });

    const loadedTasks = todoStorage.getTasks(projects.getIndex().getName());
    loadedTasks.forEach(task => {
        const newTask = Task.loadFromLocalStorage(task.title);
        if(newTask) {
            newTask.setName(task.title);
            newTask.setParent(taskList);
            newTask.checkDate(thisWeekProject, todayProject, newTask);

            projects.getIndex().addTask(newTask);
            newTask.setProjectOwner(projects.getIndex(), newTask, todoStorage);

            //newTask.createTaskElement(taskList)
        }
    });
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
    newTask.checkDate(thisWeekProject, todayProject, newTask)
    projects.getIndex().addTask(newTask)
    newTask.setProjectOwner(projects.getIndex(), newTask, todoStorage)
    
    // Save the task to storage
    newTask.saveToLocalStorage()
    todoStorage.createTask(newTask.getName(), projects.getIndex().getName())
    closeTaskEvent(taskContainer)
}

function addProjectEvent() {
    const newProject = new Project() 
    newProject.setName(projectTextBox.value)
    newProject.setParent(projectList)
    projects.addProject(newProject)
    
    todoStorage.createProject(newProject.getName());

    newProject.getContainer().addEventListener('mouseup', () => {
        changeToNewTab(newProject)
        addTaskButton.style.display = 'flex'
    })

    newProject.complete.addEventListener('click', () => {
        newProject.deleteTaskElements(thisWeekProject, todayProject)
        projects.removeProject(newProject)
        newProject.container.remove()

        todoStorage.deleteProject(newProject.getName());
        changeToNewTab(inboxProject)
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

addTaskButton.addEventListener('click', () => {
    console.log('Adding task')
    closeProjectEvent()
    createTaskElements()
})

addProjectButton.addEventListener('click', () => {
    console.log('Adding Project')
    closeTaskEvent()
    createProjectElements()
})

inboxButton.addEventListener('click', () => {
    console.log(inboxProject.tasks)
    changeToNewTab(inboxProject)
    addTaskButton.style.display = 'flex'
})

todayButton.addEventListener('click', () => {
    changeToNewTab(todayProject)
    closeTaskEvent()
    addTaskButton.style.display = 'none'
})

thisWeekButton.addEventListener('click', () => {
    changeToNewTab(thisWeekProject)
    closeTaskEvent()
    addTaskButton.style.display = 'none'
})


projects.loadProjects(todoStorage.getProjects())


projects.setIndex(inboxProject)
projects.getIndex().createTaskElement(taskList)
loadTasksAndProjects()

// Set the initial tab to Inbox and create the task elements
changeToNewTab(inboxProject)

//todoStorage.clearTodoList()