import { User, IUser } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

    user = new User();

    constructor(private _authService: AuthService) { }

    ngOnInit() { }

    register(obj: any){
       if(obj.valid){
           this.user.email = obj.value.email;
           this.user.firstName = obj.value.fname;
           this.user.lastName = obj.value.lname;
           this.user.password = obj.value.password;
           this._authService.registerUser(this.user);
       }
    }
}