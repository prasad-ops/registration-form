import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'registration', component:RegistrationformComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
