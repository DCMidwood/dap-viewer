import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { 
    ReportsService,
    ProjectsService
  } from './services/index';

import { 
  ReportsComponent, 
  HomepageComponent
} from './main-view/index';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ReportsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [ReportsService,ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
