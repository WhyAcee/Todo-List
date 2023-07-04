import Project from "./project"

export default class projectManager {
    constructor() {
        this.list = []
        this.index = new Project()
    }

    getIndex() {
        return this.index
    }

    setIndex(project) {
        this.index = project
    }

    addProject(project) {
        this.list.push(project)
    }

    removeProject(project) {
        const index = this.list.indexOf(project)
        if(index !== -1) {
            this.list.splice(index,1)
        }
    }

    loadProjects(projectsData) {
        this.list = projectsData.map(projectData => {
            const project = new Project();
            project.setName(projectData.title)
            return project
        })
    }
}

