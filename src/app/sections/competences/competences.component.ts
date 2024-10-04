import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarModule} from "primeng/progressbar";
import {NgForOf} from "@angular/common";
import {ScrollService} from "../../shared/scroll.service";

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [
    ProgressBarModule,
    NgForOf
  ],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent implements OnInit, AfterViewInit {
  skills = [
    { name: 'Angular', value: 80 },
    { name: 'TypeScript', value: 75 },
    { name: 'HTML/CSS', value: 85 },
    { name: 'JavaScript', value: 70 },
    // Ajoutez d'autres compétences ici
  ];

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
  }
  ngOnInit(): void { }
}
