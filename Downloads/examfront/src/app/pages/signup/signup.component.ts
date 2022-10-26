import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  public user={
    emailId:'',
     fullName:'',
     mobileNo:'',
     city:'',
     dateOfBirth:'',
     state:'',
     qualifiction:'',
     yearOfCompletion:'',
     password:'',
     level:''
    };  
    
    formSubmit(){
      // if(this.user.fullName== ''|| this.user.fullName==null ||this.user.emailId== ''|| this.user.emailId==null
      // || this.user.mobileNo== ''|| this.user.mobileNo==null || this.user.city== ''|| this.user.city==null
      // || this.user.dateOfBirth== ''|| this.user.dateOfBirth==null || this.user.state== ''|| this.user.state==null
      // || this.user.qualifiction== ''|| this.user.qualifiction==null || this.user.yearOfCompletion== ''|| this.user.yearOfCompletion==null
      // || this.user.password== ''|| this.user.password==null || this.user.role== ''|| this.user.role==null){
      //   alert('All filds are required');
      //   return;
      // }
      console.log(this.user);
  
      //addUser/user services
  
        this.userService.addUser(this.user).subscribe(
          (data)=>{
            console.log(data);
            alert('Registration success');
  
          },
          (error)=>{
            console.log(error);
            alert('something went wrong');
  
          }
        );
    }


  ngOnInit(): void {
  }

}
