import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable()

export class ReportsService {
    getReports(){
        return  REPORTS
    }
}

const REPORTS = [
    {
        reportName: 'ExampleMTO',
        storedProcedure: 'Example SP',
    },
    {
        reportName: 'ExampleCivMTO',
        storedProcedure: 'Example CivMTO SP',
    }
]