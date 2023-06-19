import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Entradas} from '../interfaces/entradas-blog.interface';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  constructor( private http: HttpClient ) { }
  getEntradas(): Observable<Entradas> {
    const url = 'http://localhost:3000/entradas';
    return this.http.get<Entradas>(url);
  }
}
