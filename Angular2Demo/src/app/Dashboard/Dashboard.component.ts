import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/Dashboard/Dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    constructor(private _activatedRoute: ActivatedRoute, private _routermodule: RouterModule,
        private _router: Router) {
    }

    OnSubmitButtonClickHome(): void {
        this._router.navigate(['/dashboard/menuhome']);
    }

    OnSubmitButtonClickAbout(): void {
        this._router.navigate(['/dashboard/pagenotfound']);
    }

    OnSubmitButtonClickBack(): void {
        this._router.navigate(['/login']);
    }

    ngOnInit() { }
}

