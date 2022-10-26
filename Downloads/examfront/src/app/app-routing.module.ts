import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { StudentComponent } from './pages/admin/student/student.component';
import { QuizComponent } from './pages/admin/quiz/quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';


const routes: Routes = [
{
  path: 'signup',
  component: SignupComponent,
  pathMatch: 'full',
},
{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full',
},
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'admin',
  component: DashboardComponent,
  children:[
    {
      path:'',
      component: WelcomeComponent,
    },
    {
      path:'categories',
      component: ViewCategoriesComponent,
    },
    {
      path:'home',
      component: WelcomeComponent,
    },
    {
      path:'student',
      component: StudentComponent,
    },
    {
      path:'quiz',
      component: QuizComponent,
    },
    {
      path:'addQuiz',
      component: AddQuizComponent,
    },
    {
      path:'addQuestion',
      component: AddQuestionComponent,
    },
  ]
},
{
  path: 'user-dashboard',
  component: UserDashboardComponent,
  pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
