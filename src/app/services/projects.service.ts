import { Injectable } from "@angular/core"

@Injectable()

export class ProjectsService {
    getProjects(){
        return PROJECTS
    }
}


const PROJECTS = [
    {
        projectId: 1,
        projectName: "ProjectA"
    },
    {
        projectId: 2,
        projectName: "ProjectB"
    }
]