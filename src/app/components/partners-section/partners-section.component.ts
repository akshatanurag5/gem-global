import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.scss'
})
export class PartnersSectionComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
