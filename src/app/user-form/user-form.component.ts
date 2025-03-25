import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';
import { UserType } from '../types/userType';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserForm implements OnInit {
  teams: String[] = [];
  userForm!: FormGroup;
  userId: number | null = null; // Gérer si l'utilisateur est en édition ou en création
  isCreateMode: boolean = false;
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
      id: [null, Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      team: ['', Validators.required],
      isAdmin: [false]
    });

    // Si un ID est présent, charger les données de l'utilisateur
    if (this.userId) {
      const user = this.userService.getUserById(this.userId);
      if (user) {
        this.userForm.patchValue(user);
      }
    }

    this.teams = this.teamService.getAllTeams();
  }

  onSubmit(): void {
    console.log(this.userForm);

    if (this.userForm.invalid) {
      return; // Empêche la soumission si le formulaire est invalide
    }

    const userData: UserType = { ...this.userForm.value };

    if (this.isCreateMode) {
      console.log("passe la");

      this.userService.addUser(userData);
    } else {
      this.userService.updateUser(userData);
    }

    this.router.navigate(['/users']); // Rediriger vers la liste
  }
}
