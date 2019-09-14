import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {BackendService} from "./backend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  twoLetters = new FormControl();

  title = 'Top Ten Words';

  words = [];

  constructor(private backendService: BackendService) {
  }

  refresh(): void {
    if (this.twoLetters.value.toString().length == 2) {
      this.backendService.findTopTenWords(this.twoLetters.value)
        .subscribe(array => this.words = array)
    }
  }
}
