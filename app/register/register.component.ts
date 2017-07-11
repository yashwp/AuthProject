import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { User, IUser } from './../models/user';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

    user = new User();
    isMatched:boolean = true;

    constructor(private route: ActivatedRoute, private router:Router,
                private _authService: AuthService) { }

    ngOnInit() {
        
    }

    register(obj: any){
       if(obj.valid){
           if(obj.value.cnfPass===obj.value.password){
                this.isMatched =true;
                this.user.email = obj.value.email;
                this.user.firstName = obj.value.fname;
                this.user.lastName = obj.value.lname;
                this.user.password = obj.value.password;
                this._authService.registerUser(this.user).subscribe((res)=>{
                    if(res){
                        this.router.navigate(['/']);
                    }
                },
                error=>{
                    console.log('Error occured',error);
                })
           }
           else{
               this.isMatched= false;
           }
       }
    }
}