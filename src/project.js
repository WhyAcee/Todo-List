export default class Project{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
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
}