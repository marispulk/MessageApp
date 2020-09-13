import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = "api/users";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applications/json' })
  };

  userLogin(user: User): Observable<User> {
    return this.http.post<User>(this.AUTH_API, user, this.httpOptions);
  }

  userRegister(user): Observable<any> {
    return this.http.post<User>(this.AUTH_API, user, this.httpOptions);

  }

  constructor(
    private http: HttpClient
  ) { }
}
