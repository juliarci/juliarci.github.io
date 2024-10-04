import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonDirective} from "primeng/button";
import {ScrollService} from "../../shared/scroll.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Logique d'envoi du formulaire (à implémenter)
    console.log('Formulaire soumis', this.contact);
    // Réinitialiser le formulaire après soumission
    this.contact = { name: '', email: '', message: '' };
  }
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
  }
}
