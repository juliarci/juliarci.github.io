import { AfterViewInit, Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ScrollService } from '../../shared/scroll.service';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
  imports: [
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class CompetencesComponent implements OnInit, AfterViewInit {
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;
  @ViewChildren('progressBar2') progressBars2!: QueryList<ElementRef>;

  skills = [
    { name: 'Angular', value: 80 },
    { name: 'TypeScript', value: 75 },
    { name: 'HTML/CSS', value: 85 },
    { name: 'JavaScript', value: 70 },
    { name: 'Springboot', value: 80 },
    { name: 'Java', value: 75 },
    { name: 'Python', value: 50 },
    { name: 'SQL', value: 65 },
    { name: 'Docker', value: 60 },
    { name: 'GitHub', value: 60 },
    { name: 'Vue.js', value: 65 },
    { name: 'Français', value: 100 },
    { name: 'Anglais', value: 65 },
    { name: 'Italien', value: 85 },
    { name: 'Espagnol', value: 35 },
    { name: 'Chinois', value: 15 },
  ];

  constructor(private scrollService: ScrollService, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
    setTimeout(() => this.animateProgressBars(), 500); // Délai pour l'animation
  }

  ngOnInit(): void {}

  secondColumnSkills() {
    const middleIndex = Math.ceil(this.skills.length / 2);
    return this.skills.slice(middleIndex);
  }
  firstColumnSkills() {
    const middleIndex = Math.ceil(this.skills.length / 2);
    return this.skills.slice(0,middleIndex);
  }
  animateProgressBars() {
    // Récupérer les barres de la première colonne
    const firstColumnBars = this.progressBars.toArray(); // Convertir en tableau pour manipulation
    const firstColumnSkills = this.firstColumnSkills(); // Récupérer la première moitié des compétences

    firstColumnBars.forEach((bar, index) => {
      if (index < firstColumnSkills.length) { // Vérification pour éviter les erreurs d'index
        const skillValue = firstColumnSkills[index].value; // Utiliser la valeur de la première colonne
        this.renderer.setStyle(bar.nativeElement, 'width', skillValue + '%');
        this.renderer.setStyle(bar.nativeElement, 'background-color', '#ffffff'); // Couleur de remplissage
      }
    });

    // Récupérer les barres de la deuxième colonne
    const secondColumnBars = this.progressBars2.toArray(); // Convertir en tableau pour manipulation
    const secondColumnSkills = this.secondColumnSkills(); // Récupérer la seconde moitié des compétences

    secondColumnBars.forEach((bar, index) => {
      if (index < secondColumnSkills.length) { // Vérification pour éviter les erreurs d'index
        const skillValue = secondColumnSkills[index].value; // Utiliser la valeur de la seconde colonne
        this.renderer.setStyle(bar.nativeElement, 'width', skillValue + '%');
        this.renderer.setStyle(bar.nativeElement, 'background-color', '#ffffff'); // Couleur de remplissage
      }
    });
  }

}
