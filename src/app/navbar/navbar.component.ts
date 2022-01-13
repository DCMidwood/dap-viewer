import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../services/projects.service";

@Component ({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
    nav.navbar-nav {font-size: 15px}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {searchForm {display:none}}
    li > a.active { color: #F97924; }
`]

})
export class NavbarComponent{
  projects:any[]
  constructor(private projectService: ProjectsService){
  this.projects = this.projectService.getProjects()
  }
}