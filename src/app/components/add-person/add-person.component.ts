import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  styleUrls: ['./add-person.component.css'],
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent {
  @ViewChild('personForm') personForm!: NgForm;

  person = { name: '', age: '', gender: '', mobile: '' };
  errorMessage: string = '';

  constructor(private personService: PersonService, private router: Router) {}

  savePerson() {
    if (this.personForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.personService.addPerson(this.person).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'Failed to add person. Please try again.';
        console.error('Error:', err);
      }
    });
  }
}
