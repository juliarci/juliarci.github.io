import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ScrollService} from "../../shared/scroll.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initScrollReveal();
  }
}
