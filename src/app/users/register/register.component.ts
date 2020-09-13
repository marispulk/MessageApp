import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  isSignUpSuccesful = false;
  isSignUpFailed = false;
  errorMessage = '';

  onSubmit(username: string, password: string): void {
    this.authService.userRegister( {username, password } as User)
    .subscribe(
      data => {
        console.log(data);
        this.isSignUpSuccesful = true;
        this.isSignUpFailed = false;
      },
      err=>{
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      }
    )
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
