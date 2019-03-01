import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './Login/login.component';
import { DashboardComponent }  from './Dashboard/Dashboard.component';
import { PageNotFoundComponent }  from './Others/PageNotFound.component';
import { MenuHomeComponent } from './MenuHome/MenuHome.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        PageNotFoundComponent,
        MenuHomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }