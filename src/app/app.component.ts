import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/header/navbar/navbar.component";
import {HeaderComponent} from "./components/header/header.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {FeatureSectionComponent} from "./components/feature-section/feature-section.component";
import {CardsSectionComponent} from "./components/cards-section/cards-section.component";
import {TeamSectionComponent} from "./components/team-section/team-section.component";
import {PartnersSectionComponent} from "./components/partners-section/partners-section.component";
import {NewsAndUpdateComponent} from "./components/news-and-update/news-and-update.component";
import {FaqSectionComponent} from "./components/faq-section/faq-section.component";
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SECTION_IDS} from "./constants/app.const";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, HeroSectionComponent, AboutUsComponent, FeatureSectionComponent, CardsSectionComponent, TeamSectionComponent, PartnersSectionComponent, NewsAndUpdateComponent, FaqSectionComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'gem-global';
  activeSection: string = 'hero';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    for (const id of Object.values(SECTION_IDS)) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
