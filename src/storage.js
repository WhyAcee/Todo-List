export default class Storage {
    constructor() {
        this.storage = { projects: [], tasks: [] };
        this.loadTodoList()
    }
    
    createProject(title) {
        const project = { title, id: this.generateId() };
        this.storage.projects.push(project);
        this.saveTodoList();
    }

    createTask(title, projectId) {
        const task = { title, projectId, id: this.generateId() };
        this.storage.tasks.push(task);
        this.saveTodoList();
    }

    getProjects() {
        return this.storage.projects
    }

    getTasks(projectId) {
        return this.storage.tasks.filter(task => task.projectId === projectId)
    }

    deleteProject(projectName) {
        // Delete project from storage.projects
        const deletedProject = this.storage.projects.find(
            (project) => project.title === projectName
        );
        this.storage.projects = this.storage.projects.filter(
            (project) => project.title !== projectName
        )

        console.log(deletedProject)
        
        // Delete project from storage.tasks
        this.storage.tasks = this.storage.tasks.filter(
            (task) => task.projectId !== deletedProject.title
        );

        this.saveTodoList();
    }

    deleteTask(taskName) {
    // Remove the task from storage.tasks
    this.storage.tasks = this.storage.tasks.filter(
      (task) => task.title !== taskName
    );

    this.saveTodoList();
  }

    saveTodoList() {
        localStorage.setItem('storage', JSON.stringify(this.storage))
        console.log('Saved data to local storage:', this.storage);
    }

    loadTodoList() {
        const storedTodoList = localStorage.getItem('storage')
        if (storedTodoList) {
            this.storage = JSON.parse(storedTodoList)
            console.log('Loaded data from local storage:', this.storage);
        }
    }

    generateId() {
        return Math.random().toString(36).substring(2, 9);
    }

    clearTodoList() {
        localStorage.removeItem('storage');
        this.storage = { projects: [], tasks: [] };
    }
};