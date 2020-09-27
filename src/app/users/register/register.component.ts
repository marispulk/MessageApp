import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignUpSuccesful = false;
  isSignUpFailed = false;
  errorMessage = '';

  onSubmit(email: string, password: string): void {
    this.authService.credentialSignUp(email,password);
    this.router.navigate([''])
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
