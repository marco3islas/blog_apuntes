import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './shared/header/header.component';
import { AnuncioComponent } from './components/anuncio/anuncio/anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnuncioComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
