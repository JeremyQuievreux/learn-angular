import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { TeamService } from '../../services/team/team.service';
import { PilotType } from '../../types/pilotType';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserForm implements OnInit {
  // init des variables
  teams: String[] = [];
  userForm!: FormGroup;
  userId: number | null = null;
  isCreateMode: boolean = false;
  user: PilotType | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? Number(idParam) : null;
    this.isCreateMode = this.router.url.includes('/create');

    // Initialiser le formulaire
    this.userForm = this.fb.group({
      id: [null],
      pilotNumber: [null, Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      team: ['', Validators.required],
      isChampion: [false]
    });

    // Si un ID est présent, charger les données de l'utilisateur
    if (this.userId) {
      this.userService.getPilotById(this.userId).subscribe(user => {
        this.user = user;
      });
      if (this.user) {
        this.userForm.patchValue(this.user);
      }
    }
    this.teams = this.teamService.getAllTeams();
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      // Empêche la soumission si le formulaire est invalide
      return;
    }
    // création dto
    const pilotData: PilotType = { ...this.userForm.value };

    if (this.isCreateMode) {
      this.userService.addPilot(pilotData).subscribe(() => {
        // Redirection après ajout
        this.router.navigate(['/pilots']);
      });
    } else {
      this.userService.updatePilot(pilotData).subscribe(() => {
        // Redirection après mise à jour
        this.router.navigate(['/pilots']);
      });
    }
    // Rediriger vers la liste
    this.router.navigate(['/pilots']);
  }
}
