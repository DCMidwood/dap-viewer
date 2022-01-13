import { Component, OnInit } from "@angular/core";
import { ReportsService } from "src/app/services";

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})

export class ReportsComponent{
    reports:any[]
    constructor(private reportService: ReportsService){
    this.reports = this.reportService.getReports()
}
}