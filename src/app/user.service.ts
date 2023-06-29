import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = '/register';

  async postData(data: {
    username: string;
    password: string;
    email: string;
  }): Promise<any> {
    try {
      const response = await this.httpClient
        .post<any>(this.apiUrl, data)
        .subscribe((responseData) => {
          console.log(responseData);
        });
    } catch (error) {
      console.error('Error posting data to Azure Cosmos DB:', error);
      throw error;
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

  getPost() {
    return this.httpClient
      .get<{
        username: string;
        password: string;
        email: string;
      }>('/register')
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
