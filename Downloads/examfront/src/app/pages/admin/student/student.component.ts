import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [
    {
      userId:1,
      fullName:'suvankar',
      emailId:"sad",
      level:"2",
      role:"student"
    }
  ]
  constructor(private Student:UserService) { }

  ngOnInit(): void {
    this.Student.students().subscribe((data:any) => {
      this.students = data;
      console.log(this.students);
      console.log(this.students);
    },
    (error)=>{
      console.log(error);
      
    });
  }

}
