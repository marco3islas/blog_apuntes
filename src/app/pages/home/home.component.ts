import { Component, OnInit } from '@angular/core';
import {Entradas} from '../interfaces/entradas-blog.interface';
import {EntradasService} from '../services/entradas.service';

	@Component({
		selector: 'app-home-component',
		templateUrl: './home.component.html',
		styleUrls: ['./home.component.css']

	})
	export class HomeComponent implements OnInit {

		entradas: Entradas[] = [];


		constructor(private service: EntradasService) { }

		ngOnInit() { 
			this.service.getEntradas().subscribe(data => {
				this.entradas = data;

			})
		}
		
	}
