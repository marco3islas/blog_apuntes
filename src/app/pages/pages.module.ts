import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogComponent} from './blog/blog.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MaterialModule} from '../material/material.module';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactoComponent} from './contacto/contacto.component';
import {EntradasTarjetaComponent} from './components/entradas-tarjeta/entrada-tarjeta.component';



@NgModule({
	declarations: [
		AboutComponent,
		BlogComponent,
		ContactoComponent,
		EntradasTarjetaComponent,
    AnuncioComponent,
		HomeComponent
	],
  imports: [
    CommonModule,
		PagesRoutingModule,
		MaterialModule,
  ],
	exports: [
		PagesRoutingModule,
		HomeComponent
	]
})
export class PagesModule { }
