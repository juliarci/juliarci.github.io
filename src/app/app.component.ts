import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { ScrollService } from "./shared/scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sections: string[] = ['home', 'experiences', 'formations', 'competences', 'passions', 'contact'];
  currentSectionIndex: number = 0;
  private isScrolling: boolean = false; // Indicateur de défilement
  private scrollDelay: number = 1000; // Temps d'attente en millisecondes

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentPath = this.router.url.slice(1);
      this.currentSectionIndex = this.sections.indexOf(currentPath) !== -1 ? this.sections.indexOf(currentPath) : 0;

      this.scrollService.initScrollReveal();
    });
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return; // Si déjà en train de faire défiler, sortir

    if (event.deltaY > 0) {
      this.scrollToNextSection();
    } else {
      this.scrollToPreviousSection();
    }
  }

  scrollToNextSection() {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
      this.router.navigate([this.sections[this.currentSectionIndex]]);
      this.setScrollingState(); // Activer l'état de défilement
    }
  }

  scrollToPreviousSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.router.navigate([this.sections[this.currentSectionIndex]]);
      this.setScrollingState(); // Activer l'état de défilement
    }
  }

  private setScrollingState() {
    this.isScrolling = true; // Définir l'état de défilement à true
    setTimeout(() => {
      this.isScrolling = false; // Réinitialiser après le délai
    }, this.scrollDelay); // Utiliser le délai défini
  }
}
