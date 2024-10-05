import {ScrollService} from "../../shared/scroll.service";
import {AfterViewInit, Component, OnInit} from "@angular/core";
import {CarouselModule} from "primeng/carousel";
@Component({
  selector: 'app-experiences',
  standalone: true,
  templateUrl: './experiences.component.html',
  imports: [
    CarouselModule
  ],
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit, AfterViewInit {

  songs = [
    { title: 'Agir à Dom', artist: 'Alternante :  Développeuse FullStack ' +
        'Frontend : Angular - Backend : Springboot', time: 'Septembre 2023 - Maintenant',
      image: 'assets/images/Agir.png' },
    { title: 'Département de la Savoie', artist: `Assistante au transport scolaire Assistante service informatique Assistante chef de projet`, time: 'Juin/Août 2023 Août 2022 Juin/Août 2021 ',
      image: 'assets/images/font-weight bold;-2.png' },
    { title: 'Val d\'Isère Téléphériques', artist: 'Renfort pour l\'accueil des clients et du contrôle des forfaits durant les vacances scolaires', time: 'Février 2022',
      image: 'assets/images/Image-de-la-video-promo-360-hiver-et-ete-de-Val-dIsere-640x640.webp' },
    { title: 'NTN SNR', artist: 'Stage de cycle préparatoire dans lequel j\'ai pu être opératrice en métrologie', time: 'Janvier - Février 2022',
      image: 'assets/images/NTNSNR-white-2023.jpg' },
    { title: 'Carrefour', artist: 'Emploi étudiant - Employée de rayon ', time: 'Avril - Août 2021 ',
      image: 'assets/images/carrefour-1.svg' },
    { title: 'Ugitech', artist: 'Stage de 3ème', time: 'Janvier 2017', image: 'assets/images/UGITECH-PNG.png.webp' },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollService.initScrollReveal();
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
      input.addEventListener('change', () => {
        document.body.classList.toggle('blue');
      });
    });
  }

}
