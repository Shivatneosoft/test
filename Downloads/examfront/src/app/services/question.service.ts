import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }

  public addQuestion(questions: {question:string,
  option1:string,
  option2:string,
  option3:string,
  option4:string,
  answer:string,
  quiz:{
    quiz_id:string
  }}){
    return this._http.post(`${baseUrl}/question/add`, questions)
  }
}
