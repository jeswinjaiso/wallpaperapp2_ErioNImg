import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login,Registration } from 'src/app/Models/Login';

import {HttpClient,HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  
})
export class LoginComponent {
  loginObj:Login;
  regObj:Registration;
  
  constructor(private http: HttpClient,private router: Router){
    this.loginObj=new Login(); 
    this.regObj=new Registration();   
  }
  
  onLogin(){
    this.http.post('http://localhost:34302/api/login',{ uname:this.loginObj.username,pwd:this.loginObj.password }).subscribe(
      (res:any)=>{
        if(res.result){
          alert("Login Succes");
          this.router.navigate(['/']);
        }
        else{
          console.log(res.message)
        }
      }
    )
  }
  }



