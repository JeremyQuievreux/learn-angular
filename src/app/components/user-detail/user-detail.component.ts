// Import angular
import { Component, OnInit } from '@angular/core';
// Import pour jouer avec l'URL et le router
import { ActivatedRoute, Router } from "@angular/router";
// Import service
import { UserService } from "../../services/user/user.service";
// Import typage
import { PilotType } from "../../types/pilotType";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetail implements OnInit {
  // init des variables
  pilot: PilotType | undefined;
  pilotId: number | null = null;

  // AXEL a quoi cela sert de faire ca dans le constructor
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  //Set de la variable pilot apres un subscribe et l'init
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.pilotId = idParam ? Number(idParam) : null;

    if (this.pilotId) {
      this.userService.getPilotById(this.pilotId).subscribe(user => {
        this.pilot = user;
      });
    }
  }

  onEditClick(id: number): void {
    //redirection
    this.router.navigate(['/pilot/edit', id]);
  }
  onDeleteClick(id: number) {
    // delete pilot and subcribe, this one return an empty {}
    this.userService.deletePilot(id).subscribe(() => {
      //redirection
      this.router.navigate(['/pilots']);
    })
  }
}
