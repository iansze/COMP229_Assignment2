import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @ViewChild('f') signupForm: NgForm | undefined;
  userEmail = '';
  //Print all data inputted by the user
  onSubmit(form: NgForm): void {
    console.log(this.signupForm?.value);
    form.resetForm();
  }
}
