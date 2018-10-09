import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersByCountryComponent } from './players-by-country/players-by-country.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersByCountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
