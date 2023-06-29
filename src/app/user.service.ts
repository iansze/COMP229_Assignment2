import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl =
    'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/register/api/register';

  postData(user: User): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user);
  }
}

// createUser(username: String, password: string, email: string) {
//   const userData = {
//     username: username,
//     password: password,
//     email: email,
//   };
//   this.httpClient
//     .post<{ username: String; password: string; email: string }>(
//       'https://testdw.mongo.cosmos.azure.com:443/',
//       userData
//     )
//     .subscribe((responseData) => {
//       console.log(userData);
//       console.log(responseData);
//     });
// }
