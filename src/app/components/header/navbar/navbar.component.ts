import {Component, Input} from '@angular/core';
import {SECTION_IDS} from "../../../constants/app.const";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() activeSection: string = '';
  protected readonly SECTION_IDS = SECTION_IDS;
}
