import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";

import { User } from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  uid$: string;
  userCollection: AngularFirestoreCollection<User>;

  async credentialSignIn(email: string, password: string) {
    const credential = await this.afauth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['']);
  }

  credentialSignUp(email: string, password: string) {
    this.afauth.createUserWithEmailAndPassword(email, password)
      .then(userdata => {
        return this.database.collection('users').doc(userdata.user.uid).set({
          uid: userdata.user.uid,
          email: userdata.user.email,
          //Set default display picture
          displayPicture: 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
          //Default display name(all before @)
          displayName: userdata.user.email.substring(0, userdata.user.email.indexOf('@'))
        })

      });
  }

  async credentialSignOut() {
    const signout = await this.afauth.signOut();
    this.router.navigate(['login']);
  }

  currentUser() {
    return this.uid$;
  }

  constructor(
    private afauth: AngularFireAuth,
    private database: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afauth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.database.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.afauth.authState.subscribe(user => {
      if(user) this.uid$ = user.uid;
    })
  }
}
