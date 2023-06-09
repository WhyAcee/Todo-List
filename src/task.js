import Project from "./project"
import projectManager from "./projectManager"
import {getDate, getMonth, getYear, isThisWeek, startOfToday} from "date-fns"

export default class Task {
    constructor(name, priorityValue, dueDateValue) {
        this.title = name
        this.priorityValue = priorityValue
        this.dueDateValue = dueDateValue

        this.container = document.createElement('div')
        this.container.classList.add("task-item")
        
        this.complete = document.createElement('span')
        this.complete.classList.add('material-symbols-outlined')
        this.complete.classList.add('complete-task-btn')
        this.complete.textContent = 'radio_button_unchecked'

        this.task = document.createElement('div')
        this.task.classList.add("task")
        this.task.textContent = name

        this.priority = document.createElement('select')
        this.priority.classList.add('priority')
        this.priority.value = priorityValue
        this.priority.addEventListener('change', () => {
            this.saveToLocalStorage()
        })

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
        this.dueDate.value = dueDateValue

        this.container.appendChild(this.complete)
        this.container.appendChild(this.task)
        this.container.appendChild(this.priority)
        this.container.appendChild(this.dueDate)
        this.priority.appendChild(this.lowPriority)
        this.priority.appendChild(this.mediumPriority)
        this.priority.appendChild(this.highPriority)
        console.log("created Task...")
    }

    saveToLocalStorage() {
        const taskData = {
            name: this.title,
            priorityValue: this.getPriority(),
            dueDateValue: this.getDateValue()
        };
        localStorage.setItem(this.title, JSON.stringify(taskData))
    }

    static loadFromLocalStorage(name) {
        const taskData = localStorage.getItem(name);
        if (taskData) {
            const { name, priorityValue, dueDateValue } = JSON.parse(taskData)
            const task = new Task(name, priorityValue, dueDateValue)
            task.setPriority(priorityValue)
            return task
        }
        return null
    }

    getContainer() {
        return this.container
    }

    createTaskElements(list) {
        list.appendChild(this.getContainer());
    }

    setParent(parent) {
        parent.appendChild(this.container)
    }

    setName(name) {
        this.title = name
        this.task.textContent = name
    }

    getName() {
        return this.title
    }

    setPriority(priority) {
        this.priority.value = priority;
    }

    getPriority() {
        return this.priority.value
    }

    setDueDate(dueDate) {
        this.dueDateValue = dueDate;
        console.log(dueDate)
    }

    getDateValue() {
        return this.dueDate.value
    }

    setProjectOwner(parent, task, storage) {
        this.project = parent
        this.task = task
        this.storage = storage
        this.complete.addEventListener('click', () =>{
            console.log(this.task.getName())
            this.project.removeTask(this.task)
            this.container.remove()
            this.storage.deleteTask(this.task.getName())
        })
    }
    
    makeDate(year, month, day) {
        const yyyy = String(year)
        const mm = (month < 10 ? '0' : '') + String(month + 1)
        const dd = (day < 10 ? '0' : '') + String(day)
        const dateString = yyyy + '-' + mm + '-' + dd
        return dateString
    }

    getCurrentDate() {
        return new Date(this.getDateValue())
    }

    getTodaysDate() {
        const todaysDate = startOfToday()
        return this.makeDate(getYear(todaysDate), getMonth(todaysDate), getDate(todaysDate))
    }

    checkDate(weekly, daily, item) {
        this.week = weekly
        this.today = daily
        this.taskDate = item

        const updateProjectAssignment = () => {
            const currentDate = this.getCurrentDate();

            if (this.dueDate.value === this.getTodaysDate() ) {
            this.today.addTask(this.taskDate);
            } else {
            this.today.removeTask(this.taskDate);
            }

            if (isThisWeek(this.getCurrentDate()) == true) {
            this.week.addTask(this.taskDate);
            } else {
            this.week.removeTask(this.taskDate);
            }
        };

        this.dueDate.addEventListener("change", () => {
            this.saveToLocalStorage();
            this.setDueDate(this.dueDate.value);
            updateProjectAssignment();
         });

        // Call the updateProjectAssignment function initially
        updateProjectAssignment();
    }
};
