// contacts.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  editingIndex: number | null = null;
  editedPhone: string = '';
  editedEmail: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }

    this.contacts = this.contactsService.getContacts();
  }

  isEditingContact(index: number): boolean {
    return this.editingIndex !== null && this.editingIndex === index;
  }

  editContact(index: number): void {
    this.editingIndex = index;
    this.editedPhone = this.contacts[index].phone;
    this.editedEmail = this.contacts[index].email;
  }

  updateContact(index: number): void {
    if (this.editingIndex !== null) {
      this.contacts[this.editingIndex].phone = this.editedPhone;
      this.contacts[this.editingIndex].email = this.editedEmail;
      this.cancelEdit();
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.editedPhone = '';
    this.editedEmail = '';
  }

  deleteContact(index: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactsService.deleteContact(index);
    }
    this.contacts = this.contactsService.getContacts();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
