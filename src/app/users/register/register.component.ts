import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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

  onSubmit(email: string, password: string): void {

    //Needs to be moved to auth service
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  constructor(
    private authService: AuthService,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
