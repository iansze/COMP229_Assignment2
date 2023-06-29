import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  constructor(private httpClient: HttpClient) {}
  private apiUrl =
    'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/api/register';

  postData(user: User): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user);
  }

  // getUsers() {
  //   this.httpClient
  //     .get<{
  //       users: User[];
  //     }>('/api/list')
  //     .pipe(
  //       map((postData: { users: User[] }) => {
  //         return postData.users.map((user) => {
  //           return {
  //             username: user.username,
  //             password: user.password,
  //             email: user.email,
  //           };
  //         });
  //       })
  //     )
  //     .subscribe((data) => {
  //       this.users = data;
  //     });
  // }
  getUsers() {
    let user = {};
    return this.httpClient.get('/api/list');
  }
}
