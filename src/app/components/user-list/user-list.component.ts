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
  pilots: PilotType[] = [];

  constructor(private userService: UserService, private router: Router) { }

  onEditClick(id: number) {
    console.log('Edit button clicked');
    console.log(id);
    this.router.navigate(['/pilot/edit', id]);
  }
  onDeleteClick(id: number) {
    this.userService.deletePilot(id).subscribe(() => {
      this.userService.getPilots().subscribe(data => {
        this.pilots = data;
      });
    });
  }
  goToUserDetail = (id: number) => {
    console.log('Go to user detail');
    this.router.navigate(['/pilot/detail', id]);
  }

  ngOnInit(): void {
    this.userService.getPilots().subscribe(data => {
      console.log('Données récupérées depuis l\'API:', data);
      this.pilots = data;
    });
  }
}
