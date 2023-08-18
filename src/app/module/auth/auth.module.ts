import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

//router 
import { RouterModule, Routes } from '@angular/router';

//material ui 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

//reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo:'/login',pathMatch:'full' },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [RouterModule.forChild(routes),CommonModule, ReactiveFormsModule, FormsModule, MatCardModule],
})
export class AuthModule {}
