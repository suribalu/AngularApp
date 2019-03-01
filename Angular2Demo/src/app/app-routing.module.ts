import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './Login/login.component';
import { DashboardComponent }  from './Dashboard/Dashboard.component';
import { PageNotFoundComponent }  from './Others/PageNotFound.component';
import { MenuHomeComponent } from './MenuHome/MenuHome.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'pagenotfound', pathMatch: 'full' },
            { path: 'pagenotfound', component: PageNotFoundComponent },
            { path: 'menuhome', component: MenuHomeComponent }
        ]
    },
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/pagenotfound' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- installs Router routes, components and services
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }