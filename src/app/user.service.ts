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
    'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/api/register';

  postData(user: User): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user);
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/api/list'
    );
  }
}
