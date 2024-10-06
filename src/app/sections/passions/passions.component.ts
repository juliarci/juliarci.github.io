import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-passions',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.css'
})
export class PassionsComponent {
  photos = [
    { title: 'Voyage', url: 'assets/images/890741E8-8DFC-47EB-899B-189E2D6ED230.png' },
    { title: 'Snowboard', url: 'assets/images/IMG_0556.png' },
    { title: 'Course à pied', url: 'assets/images/3D8A1810 (Grand).JPG' },
    { title: 'Ski', url: 'assets/images/IMG_3824.png' },
    { title: 'Montagne', url: 'assets/images/IMG_4183.png' },
    { title: 'Photos', url: 'assets/images/IMG_5007.png' },
    { title: 'Basketball', url: 'assets/images/IMG_7885.png' },
    { title: 'Dessin', url: 'assets/images/IMG_0054.png' }
  ];
}
