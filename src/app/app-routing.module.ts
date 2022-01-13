import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './main-view';
import { ReportsComponent } from './main-view/reports/reports.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'home/reports', component: ReportsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
