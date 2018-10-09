import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { PlayersByCountryComponent } from './players-by-country/players-by-country.component';
import { PlayersComponent } from './players/players.component';
import { HoverDirective } from './directives/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    PlayersByCountryComponent,
    PlayersComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
