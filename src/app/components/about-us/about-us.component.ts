import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
