import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import {AlertComponent} from '../../shared/components/alert.component';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  loggedinUser: User;
  users: User[] = [];
  @ViewChild(AlertComponent) alertComponent: AlertComponent;

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
