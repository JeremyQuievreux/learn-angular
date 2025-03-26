import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {PilotType} from "../../types/pilotType";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetail implements OnInit{
  user: PilotType | undefined;
  userId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? Number(idParam) : null;

    if (this.userId) {
      this.user = this.userService.getUserById(this.userId);
    }
  }
  onEditClick(id: number): void {
    this.router.navigate(['/user/edit', id]);
  }
  onDeleteClick(id: number) {
    this.userService.deleteUser(id);
    this.router.navigate(['/users']);
  }
}
