import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  private user: Registration;

  

  constructor(private service:RegistrationService, private router:Router) { 
    this.user=new Registration;
   
  }



  register(){
    this.service.register(this.user).subscribe(res=>this.gotologinpage())

  }

  gotologinpage(){
    this.user=new Registration();
    this.router.navigate(['/login'])

  }

  ngOnInit() {
  }

}
