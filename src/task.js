import Project from "./project"
import projectManager from "./projectManager"

export default class Task {
    constructor(name, priority, dueDate) {
        this.container = document.createElement('div')
        this.container.classList.add("task-item")

        this.complete = document.createElement('span')
        this.complete.classList.add('material-symbols-outlined')
        this.complete.classList.add('complete-task-btn')
        this.complete.textContent = 'radio_button_unchecked'

        this.task = document.createElement('div')
        this.task.classList.add("task")
        this.task.textContent = name

        this.priority = document.createElement('select') //div
        this.priority.classList.add('priority')
        this.priority.textContent = priority

        this.lowPriority = document.createElement("option")
        this.mediumPriority = document.createElement("option")
        this.highPriority = document.createElement("option")

        this.lowPriority.value = 'Low Priority'
        this.lowPriority.text = 'Low Priority'
        this.mediumPriority.value = 'Medium priority'
        this.mediumPriority.text = 'Medium Priority'
        this.highPriority.value = 'High priority'
        this.highPriority.text = 'High Priority'

        this.dueDate = document.createElement('input')
        this.dueDate.type = 'date'
        this.dueDate.classList.add('input-due-date')
        this.dueDate.value = dueDate

        this.container.appendChild(this.complete)
        this.container.appendChild(this.task)
        this.container.appendChild(this.priority)
        this.container.appendChild(this.dueDate)
        this.priority.appendChild(this.lowPriority)
        this.priority.appendChild(this.mediumPriority)
        this.priority.appendChild(this.highPriority)
        console.log("creating Task...")
    }

    getContainer() {
        return this.container
    }

    setParent(parent) {
        parent.appendChild(this.container)
    }

    setName(name) {
        this.task.textContent = name
    }

    getName() {
        return this.task.textContent
    }

    setDate(dueDate) {
        this.dueDate.textContent = dueDate
    }

    getDate() {
        return this.dueDate.textContent
    }

    getPriority() {
        return this.priority.value
    }

    setProjectOwner(parent, task) {
        this.project = parent
        this.task = task
        this.complete.addEventListener('click', () =>{
            console.log(this.task.getName())
            this.project.removeTask(this.task)
            this.container.remove()
        })
    }
};