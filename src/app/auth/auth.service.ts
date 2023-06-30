import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private isAuth = false;
  private authStatus = new Subject<boolean>();
  private usernameStatus = new Subject<string>();
  private baseUrl =
    'http://localhost:3000/' ||
    'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  getUsernameStatus() {
    return this.usernameStatus.asObservable();
  }

  getAuth() {
    return this.isAuth;
  }

  signupUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + 'api/register', user);
  }
  login(username: string, password: string) {
    const authData: AuthData = { username: username, password: password };
    this.httpClient
      .post<{ token: string }>(this.baseUrl + '/api/login', authData)
      .subscribe({
        next: (res) => {
          const token = res.token;
          this.token = res.token;
          if (token) {
            this.isAuth = true;
            this.authStatus.next(true);
            this.usernameStatus.next(username);
            this.router.navigate(['/business-contact-list']);
          }
        },
        //Incorrect username or password redirect back to the Login View
        error: (error) => {
          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            });
        },
      });
  }

  logOut() {
    this.token = '';
    this.authStatus.next(false);
    this.router.navigate(['/']);
  }
}
