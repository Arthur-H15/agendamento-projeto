export class Email{
    constructor(private email:string){}
    static isValid(email:string):boolean{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
   static create(email:string){
        if(!this.isValid) new Error("Invalid email");
        return new Email(email);
    }
    getEmail(){
        return this.email;
    }

}