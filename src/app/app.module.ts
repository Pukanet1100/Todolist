import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }