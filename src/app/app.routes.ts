import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { FormationsComponent } from './sections/formations/formations.component';
import { PassionsComponent } from './sections/passions/passions.component';
import { CompetencesComponent } from './sections/competences/competences.component';
import { ContactComponent } from './sections/contact/contact.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'passions', component: PassionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];
