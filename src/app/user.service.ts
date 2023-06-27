import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'https://testdw.mongo.cosmos.azure.com/register';

  async postData(data: any): Promise<any> {
    try {
      const response = await this.httpClient
        .post<any>(this.apiUrl, data)
        .toPromise();
      console.log('Data posted to Azure Cosmos DB:', response);
      return response;
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
}
