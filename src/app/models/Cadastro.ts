export class Cadastro {
    constructor(){
        this.id=0;
        this.UserName='';
        this.FullName='';
        this.Email='';
        this.BornDate='';
        this.Number='';
        this.Password='';
        this.ConfirmPassword='';
    }

    id: number;
    UserName: string;
    FullName: string;
    Email: string;
    BornDate: string;
    Number?: string;
    Password: string;
    ConfirmPassword: string;
}