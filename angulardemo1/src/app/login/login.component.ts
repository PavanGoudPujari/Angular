import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  greet: string='';

  validate(username:any,password:any){
    if(username.value == 'admin' && password.value == '1234'){
              this.greet='welcome to angular';
    }else{
this.greet ='Login Denied Check Credentials';
    }
  }

}
