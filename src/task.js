export default class Task {
    constructor(name, priority, dueDate = 'No Date Added') {
        this.container = document.createElement('div')
        this.container.classList.add("task-item")

        this.task = document.createElement('div')
        this.task.classList.add("task")
        this.task.textContent = name
        
        this.priority = document.createElement('div')
        this.priority.classList.add('priority')
        this.priority.textContent = priority

        this.dueDate = document.createElement('input')
        this.dueDate.type = "date"
        this.dueDate.classList.add('input-due-date')

        this.container.appendChild(this.task)
        this.container.appendChild(this.priority)
        this.container.appendChild(this.dueDate)
        console.log("creating Task...")
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

    setPriority(priority) {
        this.priority.textContent = priority
    }

    getPriority() {
        return this.priority.textContent
    }
};