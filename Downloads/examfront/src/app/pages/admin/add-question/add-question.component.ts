import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  quizs=[
    {
      quizId:'',
    title:'',
    },
  ]

  questions={
    question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      quiz_id:''
    }
  }

  constructor(private _quiz:QuizService,
    private _snack: MatSnackBar,
    private _question:QuestionService) { }

  ngOnInit(): void {
    this._quiz.quizs().subscribe(
      (data:any) => {
        this.quizs = data;
        console.log("coping");
        
        console.log(this.quizs);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    )
  }

  
  addQuestion(){
  if(this.questions.question.trim()=='' || this.questions.question == null){
    this._snack.open('Title Required!!','',{
      duration:3000,
    });
    return;
  }
  this._question.addQuestion(this.questions).subscribe(
    (data) => {
      Swal.fire('Success', 'quiz is added', 'success');
      this.questions = {
        question:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:'',
        quiz:{
          quiz_id:''
        }
      };
    },
    
    (error) => {
      Swal.fire('Error!! ', 'Error while adding quiz', 'error');
      console.log(error);
    }
  );
}

}