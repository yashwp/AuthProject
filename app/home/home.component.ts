import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './../models/user';

import { AuthService } from './../services/auth.service';
@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    
    user: IUser[] = [];
    constructor(private _authService: AuthService,
                private router:Router) { }

    ngOnInit() { }

    logout(){
        this._authService.logout();
        this.router.navigate(['/login']);
    }
}