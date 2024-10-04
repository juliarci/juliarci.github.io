import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {ScrollService} from "../../shared/scroll.service";

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit, AfterViewInit {
  experiences = [
    {title: 'Développeur Web', description: 'Développement de sites web avec Angular.'},
    {title: 'Ingénieur Logiciel', description: 'Conception de systèmes logiciels.'},
    {title: 'Consultant IT', description: 'Conseil en technologies de l\'information.'},
    // Ajoutez d'autres expériences ici
  ];

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
  }

  ngOnInit(): void {
  }
}
