import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-edit-person',
  styleUrls: ['./edit-person.component.css'],
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id!).subscribe(data => this.person = data);
  }

  updatePerson() {
    this.personService.updatePerson(this.person._id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
