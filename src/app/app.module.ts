import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BackendService} from "./services/backend.service";
import {HttpClientModule} from "@angular/common/http";
import { WordsTableComponent } from './words-table/words-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
