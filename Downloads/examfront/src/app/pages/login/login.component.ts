import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router,private localservice:LoginService) { }

  email:any;
  password:any;
  message:any;

  ngOnInit(): void {

  }

  login(){

    this.http.post("http://localhost:8080/loginuser/"+this.email+"/"+this.password,{}, {responseType:'text' as 'json'})
         .subscribe((data:any) =>{
          // console.log(localStorage.getItem("user_type"));
           localStorage.setItem("token", "value");
           this.localservice.userType=data; 
          // console.log(this.password,this.user)
           if(data == "admin"){
           
            this.router.navigate([''])}
           else if(data == "user"){this.router.navigate(['/']);
           console.log(this.password,this.email);
          }
           //else if(data === "students"){this.router.navigate(['showtostudentreport']) }
           //else if(data === "customers"){this.router.navigate(['customer/home']) }
           else{this.router.navigate(['user'])}
           
         // this.router.navigate([data]);
         });

         

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }



}
