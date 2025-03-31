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
  //init des variables
  pilots: PilotType[] = [];

  constructor(private userService: UserService, private router: Router) { }

  onEditClick(id: number) {
    //redirection
    this.router.navigate(['/pilot/edit', id]);
  }
  onDeleteClick(id: number) {
    // delete pilot and subscribe, after receive empty {} and then subscribe to get allPilots
    this.userService.deletePilot(id).subscribe(() => {
      this.userService.getPilots().subscribe(data => {
        this.pilots = data;
      });
    });
  }
  goToUserDetail = (id: number) => {
    //redirection
    this.router.navigate(['/pilot/detail', id]);
  }

  ngOnInit(): void {
    // set pilots after subscribes response
    this.userService.getPilots().subscribe(data => {
      this.pilots = data;
    });
  }
}
