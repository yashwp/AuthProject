export interface IUser {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPass?:string;
}

export class User implements IUser {
    _id:string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    
    constructor(email = '', password = ''){
        this.email = email;
        this.password = password;
    }
}
