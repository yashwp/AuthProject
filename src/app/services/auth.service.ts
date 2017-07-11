import { Http, Response,Headers, RequestOptions  } from '@angular/http';
import { IUser } from './../models/user';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class AuthService {

    private apiUrlLogin: string = "https://reqres.in/api/login";
    private apiUrlReg: string = "https://reqres.in/api/register";

    static isAuthenticated: boolean = false;
    constructor(private _http: Http){}
    login(body: IUser){
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.apiUrlLogin, body, options) // Using post request
                         .map((res:Response) => res.json()) // Converting response to json calling .json()
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //Handling error if occured
    }   



    registerUser(body: IUser){
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.apiUrlReg, body, options) // Using post request
                         .map((res:Response) => res.json()) // Converting response to json calling .json()
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}