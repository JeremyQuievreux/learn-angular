import { Injectable } from '@angular/core';
import { Teams } from '../data/Teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private Teams: String[] = Teams;


  // Récupérer tous les utilisateurs
  getAllTeams(): String[] {
    return this.Teams;
  }

  constructor() { }
}
