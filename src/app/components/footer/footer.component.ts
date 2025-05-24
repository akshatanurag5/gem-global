import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
