import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static users = [
    { email: 'admin@gmail.com', password: '1234' }
  ];
  private isAuthenticatedFlag = false;
  private authenticatedUser: any;

  checkCredentials(email: string, password: string): boolean {
    const user = AuthService.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.authenticatedUser = user;
      this.isAuthenticatedFlag = true;
      return true;
    }

    return false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  logout(): void {
    this.authenticatedUser = null;
    this.isAuthenticatedFlag = false;
  }
}
