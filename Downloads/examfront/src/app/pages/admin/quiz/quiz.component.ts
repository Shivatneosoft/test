import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizs = [
    {
      quizId:"1",
      active:"1",
      description:"dsfsd",
      maxMarks:"23",
      numberOfQuestions:"7",
      title:"happy",
      category_category_id:"1"
    }
  ]
  constructor(private quiz:QuizService) { }

  ngOnInit(): void {
    this.quiz.quizs().subscribe((data:any) => {
      this.quizs = data;
      console.log(this.quizs);
    },
    (error)=>{
      console.log(error);
      
    });
  }

}
