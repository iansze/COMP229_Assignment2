import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('f') signupForm: NgForm | undefined;

  constructor(private router: Router) {}

  onLogin(form: NgForm): void {
    console.log(this.signupForm?.value);
    form.resetForm();
    this.router.navigate(['']);
  }
}
