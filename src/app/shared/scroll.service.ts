import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const e = 190; // Ajustez cette valeur si nécessaire

      if (elementTop < windowHeight - e) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  }
}
