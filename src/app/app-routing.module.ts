import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'add', component: AddPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
