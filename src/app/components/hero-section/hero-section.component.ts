import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
