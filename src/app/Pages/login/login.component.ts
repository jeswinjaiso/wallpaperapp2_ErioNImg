import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from 'src/app/Models/Login';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  
})
export class LoginComponent {
  loginObj:Login;
  constructor(private http: HttpClient){
    this.loginObj=new Login();
  }
  onLogin(){
    this.http.post('',this.loginObj).subscribe(
      (res:any)=>{
        if(res.result){
          alert("Login Succes")
        }
        else{
          alert(res.message)
        }
      }
    )
  }
  }



