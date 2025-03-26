import { Injectable } from '@angular/core';
import { PilotType } from '../../types/pilotType';
import { PILOTS_MOCK } from '../../data/pilots';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: PilotType[] = PILOTS_MOCK;

  // Récupérer tous les utilisateurs
  getUsers(): PilotType[] {
    return this.users;
  }

  // Récupérer un utilisateur par son ID
  getUserById(id: number): PilotType | undefined {
    return this.users.find(user => user.id === id);
  }

  // Ajouter un nouvel utilisateur
  addUser(user: PilotType): void {
    this.users.push({ ...user }); // Auto-incrémentation ID
  }

  // Mettre à jour un utilisateur existant
  updateUser(updatedUser: PilotType): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Supprimer un utilisateur par son ID
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
