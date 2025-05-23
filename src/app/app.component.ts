import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/header/navbar/navbar.component";
import {HeaderComponent} from "./components/header/header.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {FeatureSectionComponent} from "./components/feature-section/feature-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, HeroSectionComponent, AboutUsComponent, FeatureSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gem-global';
}
