"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./Login/login.component');
var Dashboard_component_1 = require('./Dashboard/Dashboard.component');
var PageNotFound_component_1 = require('./Others/PageNotFound.component');
var MenuHome_component_1 = require('./MenuHome/MenuHome.component');
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'dashboard',
        component: Dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'pagenotfound', pathMatch: 'full' },
            { path: 'pagenotfound', component: PageNotFound_component_1.PageNotFoundComponent },
            { path: 'menuhome', component: MenuHome_component_1.MenuHomeComponent }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- installs Router routes, components and services
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app-module.routing.js.map