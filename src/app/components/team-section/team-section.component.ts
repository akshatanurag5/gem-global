import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
