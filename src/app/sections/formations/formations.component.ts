import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NgIf} from "@angular/common";
import {StepsModule} from "primeng/steps";
import {ScrollService} from "../../shared/scroll.service";

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [
    NgIf,
    StepsModule
  ],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit, AfterViewInit {
  items: MenuItem[] | undefined;
  activeIndex: number = 0;

  ngOnInit() {
    this.items = [
      { label: 'Licence Informatique' },
      { label: 'Master Développement' },
      { label: 'Certification Angular' }
      // Ajoutez d'autres labels ici
    ];
  }
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
  }
}
