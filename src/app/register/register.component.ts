import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('f') signupForm: NgForm | undefined;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private userServices: UserService
  ) {}

  // onSignUp(form: NgForm): void {
  //   this.userServices.createUser(
  //     form.value.username,
  //     form.value.password,
  //     form.value.email
  //   );

  onSignUp(): void {
    // Call the service method to post the data
    const response = this.userServices.postData({
      username: this.signupForm?.value.username,
      password: this.signupForm?.value.password,
      email: this.signupForm?.value.email,
    });
    // Handle success cases
    console.log('Data posted:', response);
  }
  catch(error: any) {
    // Handle error cases
    console.error('Error posting data:', error);
  }
}
