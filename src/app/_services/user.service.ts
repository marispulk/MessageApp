import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = "/api/test";
  $userSettingsChanged = new EventEmitter();
  users$: Observable<User>;

  getUserProperties(): Observable<User> {
    return this.auth.user$;
  }

  saveUserSettings(user: User) {
    const UserRef: AngularFirestoreDocument<User> = this.database.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      displayPicture: user.displayPicture
    }

    return UserRef.set(data, { merge: true });
  }

  notifyUserChange() {
    const userChanged = 'User settings have changed';
    this.$userSettingsChanged.emit();
  }

  getPublicContent(): Observable<any>{
    return this.http.get(this.API_URL+ '/all', {
      responseType: 'text'
    });
  }

  getUserContent(): Observable<any>{
    return this.http.get(this.API_URL+ '/user', {
      responseType: 'text'
    });
  }

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private database: AngularFirestore
  ) { }
}
