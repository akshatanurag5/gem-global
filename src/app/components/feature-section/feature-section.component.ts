import { Component } from '@angular/core';
import {SECTION_IDS, Service} from "../../constants/app.const";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss'
})

export class FeatureSectionComponent {
  selectedService: string = Service.CONSULTING.name

  selectService(service: string) {
    this.selectedService =  service
  }

  protected readonly Service = Service;
  protected readonly SECTION_IDS = SECTION_IDS;
}
