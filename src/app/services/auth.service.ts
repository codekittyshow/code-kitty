import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }

  login() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithRedirect(googleProvider);
  }
}
