import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  private baseUrl =
    'http://localhost:3000/' ||
    'https://comp229-assignment2-f3fcba403d2a.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<{ message: string; users: User[] }> {
    return this.httpClient.get<{ message: string; users: User[] }>(
      this.baseUrl + 'api/list'
    );
  }
}
