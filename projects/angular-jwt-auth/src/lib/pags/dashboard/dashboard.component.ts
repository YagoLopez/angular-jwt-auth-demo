import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  loggedinUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.remove(id).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
