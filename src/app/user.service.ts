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

  public getProducts(): Observable<{ message: string; users: User[] }> {
    return this.httpClient.get<{ message: string; users: User[] }>('/api/list');
  }
}
