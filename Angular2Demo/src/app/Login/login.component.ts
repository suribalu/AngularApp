import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: 'app/Login/login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private _activatedRoute: ActivatedRoute, private _routermodule: RouterModule,
        private _router: Router) {
    }

    OnSubmitButtonClick(): void {
        this._router.navigate(['/dashboard']);
    }

    ngOnInit() { }
}

