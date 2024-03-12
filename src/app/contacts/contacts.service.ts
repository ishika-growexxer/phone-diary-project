// contacts.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts = [
    {name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', gender: 'Male', birthDate: '1990-01-01'},
    {name: 'Jane Doe', phone: '123-456-7890', email: 'jane@example.com', gender: 'Female', birthDate: '1990-01-01' },
  ];

  private editingIndex: number | null = null;

  getContacts(): any[] {
    return [...this.contacts];
  }

  editContact(index: number): void {
    console.log(`Editing contact with index ${index}`);
    this.editingIndex = index;
  }

  deleteContact(index: number): void {
    if (index >= 0 && index < this.contacts.length) {
        this.contacts.splice(index, 1);
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }
}
