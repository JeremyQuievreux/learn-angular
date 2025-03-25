import { Injectable } from '@angular/core';
import { UserType } from '../types/userType';
import { USERS_MOCK } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserType[] = USERS_MOCK;

  // Récupérer tous les utilisateurs
  getUsers(): UserType[] {
    return this.users;
  }

  // Récupérer un utilisateur par son ID
  getUserById(id: number): UserType | undefined {
    return this.users.find(user => user.id === id);
  }

  // Ajouter un nouvel utilisateur
  addUser(user: UserType): void {
    this.users.push({ ...user }); // Auto-incrémentation ID
  }

  // Mettre à jour un utilisateur existant
  updateUser(updatedUser: UserType): void {
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
