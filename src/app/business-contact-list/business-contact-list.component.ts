import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-contact-list',
  templateUrl: './business-contact-list.component.html',
  styleUrls: ['./business-contact-list.component.css'],
})
export class BusinessContactListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userServices: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.userServices.getProducts().subscribe((response) => {
      this.users = response.users;
      console.log('Data retrieved from the database:', response);
    });
  }
}
