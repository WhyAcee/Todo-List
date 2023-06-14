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
        this.list.push()
    }

    removeProject() {
        const index = this.list.indexOf(project)
    }
}