import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-business-contact-list',
  templateUrl: './business-contact-list.component.html',
  styleUrls: ['./business-contact-list.component.css'],
})
export class BusinessContactListComponent implements OnInit {
  users: any[] = [];
  constructor(private userServices: UserService) {}
  ngOnInit(): void {
    this.userServices.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('User data:', this.users);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
