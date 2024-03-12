import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './age.pipe';
import { GenderStyleDirective } from './gender-style.directive';

const routes: Routes = [
  { path: '', component: ContactsComponent },
];

@NgModule({
  declarations: [
    ContactsComponent,
    AgePipe,
    GenderStyleDirective
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [AgePipe, GenderStyleDirective],
})
export class ContactsModule { }
