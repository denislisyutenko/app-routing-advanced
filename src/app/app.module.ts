import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhraseDetailsComponent,
    PhrasesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
