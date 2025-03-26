import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { PilotType } from '../../types/pilotType';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserList implements OnInit {
  users: PilotType[] = [];

  constructor(private userService: UserService, private router: Router) { }

  onEditClick(id: number) {
    console.log('Edit button clicked');
    console.log(id);
    this.router.navigate(['/user/edit', id]);
  }
  onDeleteClick(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
  goToUserDetail = (id: number)=> {
    console.log('Go to user detail');
    this.router.navigate(['/user/detail', id]);
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
