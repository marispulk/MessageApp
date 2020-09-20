import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from '@angular/router';

import { Observable, of, merge } from 'rxjs';
import { switchMap } from "rxjs/operators";

import { User } from "../user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  async credentialSignIn(email: string, password: string) {
    const credential = await this.afauth.signInWithEmailAndPassword(email, password);
    // return this.updateUserData(credential.user);
  }

    async credentialSignOut() {
      const signout = await this.afauth.signOut();
      this.router.navigate(['login']);
    }

  // private updateUserData({ uid, email }:User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afstore.doc(`users/${uid}`);

  //   const data = {
  //     uid: uid,
  //     email: email,
  //     displayName: displayName
  //   }

  //   return userRef.set(data, { merge: true });
  // }

  constructor(
    private afauth: AngularFireAuth,
    private afstore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afauth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afstore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }
}
