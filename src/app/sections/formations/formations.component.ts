import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  // Define the steps with their headers, subheaders, classes, and images
  steps = [
    { header: '2021 - 2026 : INSA - ISIS Ingénieur', subheader: 'École d\'ingénieur en informatique et systèmes d\'information pour la santé', class: 'one', image: 'assets/images/images.png' },
    { header: '2020 - 2021 : Université Savoie Mont-Blanc', subheader: 'Licence STAPS option santé', class: 'two', image: 'assets/images/yk9marzd_400x400.jpg' },
    { header: '2017 - 2020 : Lycée Vaugelas', subheader: 'Baccalauréat scientifique section Européenne Italien, Mention Très Bien', class: 'three', image: 'assets/images/Nouvau logo 2.jpg' }
  ];

  currentStep = 0;  // Current active step

  constructor() {}

  ngOnInit(): void {}

  // Move to the next step
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  // Close the stepper (minimize all steps)
  closeStepper() {
    this.currentStep = -1;  // Set to -1 to represent that no step is currently open
  }

  // Method to handle click events on the step header to toggle
  toggleStep(stepIndex: number) {
    // Toggle the step: if the step is already opened, close it; otherwise, open it.
    if (this.currentStep === stepIndex) {
      this.currentStep = -1;  // Close the currently opened step
    } else {
      this.currentStep = stepIndex;  // Open the clicked step
    }
  }
}
