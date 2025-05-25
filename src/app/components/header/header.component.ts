import {Component, Input} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() activeSection: string = "";

  protected readonly SECTION_IDS = SECTION_IDS;
}
