import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router ,ActivatedRoute } from '@angular/router';
import { User, IUser } from './../models/user';
import { AuthService } from './../services/auth.service';


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    user = new User();
    returnUrl:string;


    constructor(private route: ActivatedRoute, private router:Router,
                private _authService: AuthService) { }

    ngOnInit() {
        this._authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
     }

     login(obj: any){
        if(obj.valid){
            this._authService.loginUser(obj.value).subscribe((res)=>{
                if(res){
                    this.router.navigate(['/']);
                }
            },
            error=>{
                console.log('Invalid User');
            })
        }
        if(this.user.password == obj.password && this.user.email == obj.email){
            console.log('just my type');
        }
     }
}