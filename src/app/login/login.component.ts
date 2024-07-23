import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({});

  constructor(private router:Router,private fb:FormBuilder ) { 
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
reqpwd:any;loggedinuser:any;
  checkLogin(){
    //console.log(this.loginForm.value);
      if(this.loginForm.value.username =="admin" && this.loginForm.value.password == "admin123"){
        this.router.navigateByUrl('/admin/home');
        this.loggedinuser={
          username:this.loginForm.value.username,
        }
        localStorage.setItem('loggedinuser',JSON.stringify(this.loggedinuser));
      }
      else{
        this.reqpwd=this.loginForm.value.username.slice(0,3);
        this.reqpwd = this.reqpwd + "123";
        if(this.loginForm.value.password == this.reqpwd){
          this.router.navigateByUrl('/user/home');
          this.loggedinuser={
            username:this.loginForm.value.username,
          }
          localStorage.setItem('loggedinuser',JSON.stringify(this.loggedinuser));
        }
        else{
          alert("Invalid Credentials");
        }
      }
  }

}
