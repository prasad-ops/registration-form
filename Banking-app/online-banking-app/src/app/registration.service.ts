import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Registration } from './registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:2100/registration"
   }

   public register(user:Registration):Observable<Registration> {
     return this.http.post<Registration>(this.url,user);

   }

  
}
