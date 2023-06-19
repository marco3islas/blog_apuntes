import { Component, Input, OnInit } from '@angular/core';
import {Entradas} from '../../interfaces/entradas-blog.interface';

	@Component({
		selector: 'app-entradas-tarjeta-component',
		templateUrl: './entrada-tarjeta.component.html',
		styleUrls: ['./entrada-tarjeta.component.css']
	})
	export class EntradasTarjetaComponent implements OnInit {

		@Input()
		public entradasList: Entradas[] = [{
			'titulo': 'El tipado en TypeScript',
			'subtitulo': 'Como hacer un tipado correcto...En TypeScript',
			'img': 'typescript.png',
			'link': 'pagina1.html',
			'resumen':'lorem ipsum '
		}]

		constructor() { }

		ngOnInit() { }
		
	}
