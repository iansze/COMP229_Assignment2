import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<{ message: string; users: User[] }> {
    return this.httpClient.get<{ message: string; users: User[] }>('/api/list');
  }
}
