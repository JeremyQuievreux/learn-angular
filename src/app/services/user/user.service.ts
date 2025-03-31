import { Injectable } from '@angular/core';
import { PilotType } from '../../types/pilotType';
import { PILOTS_MOCK } from '../../data/pilots';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private pilots: PilotType[] = PILOTS_MOCK;

  getPilots(): Observable<PilotType[]> {
    return of(this.pilots);
  }
  // Récupérer un utilisateur par son ID
  getPilotById(id: number): Observable<PilotType | undefined> {
    return of(this.pilots.find(pilot => pilot.id === id));
  }

  // Ajouter un nouvel utilisateur
  addPilot(pilot: PilotType): Observable<void> {
    this.pilots.push({ ...pilot, id: this.pilots.length + 1 });
    // Renvoie un Observable vide pour simuler une requête HTTP
    return of();
  }

  // Mettre à jour un utilisateur existant
  updatePilot(updatedPilot: PilotType): Observable<void> {
    const index = this.pilots.findIndex(pilot => pilot.id === updatedPilot.id);
    if (index !== -1) {
      this.pilots[index] = updatedPilot;
    }
    return of();
  }

  // Supprimer un utilisateur par son ID
  deletePilot(id: number): Observable<void> {
    this.pilots = this.pilots.filter(pilot => pilot.id !== id);
    return of(undefined);
  }
}
