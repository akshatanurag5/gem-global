import { Component } from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";

@Component({
  selector: 'app-news-and-update',
  standalone: true,
  imports: [],
  templateUrl: './news-and-update.component.html',
  styleUrl: './news-and-update.component.scss'
})
export class NewsAndUpdateComponent {

  protected readonly SECTION_IDS = SECTION_IDS;
}
