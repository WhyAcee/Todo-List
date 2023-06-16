import Task from "./task";

export default class Project{
    constructor(name) {
        this.tasks = [];

        this.logo = document.createElement('span')
        this.logo.classList.add('material-symbols-outlined')
        this.logo.textContent = 'summarize'
        this.logo.style.fontSize = '2rem'

        this.container = document.createElement('button')
        this.container.classList.add("project-button")

        this.project = document.createElement('div')
        this.project.classList.add("project-name")
        this.project.textContent = name

        this.complete = document.createElement('span')
        this.complete.classList.add('material-symbols-outlined')
        this.complete.classList.add('project-delete-btn')
        this.complete.textContent = 'close'
        this.complete.style.fontSize = '2rem'
        this.complete.addEventListener('click', () => {
            this.container.remove();
        })

        this.container.appendChild(this.logo)
        this.container.appendChild(this.project)
        this.container.appendChild(this.complete)

    }

    getContainer() {
        return this.container
    }

    setParent(parent) {
        parent.appendChild(this.container)
    }

    setName(name) {
        this.project.textContent = name
    }

    getName() {
        return this.project.textContent
    }

    setTask(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task)
        if (index !== -1) {
            this.tasks.splice(index, 1)
        }
    }

    createTaskElements(list) {
        if (this.tasks != null) {
            list.textContent = ''
            for (let task in this.tasks) {
                list.appendChild(this.tasks[task].getContainer())
            }
        }     
    }
}
