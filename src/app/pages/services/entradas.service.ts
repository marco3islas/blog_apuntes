import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entradas} from '../interfaces/entradas-blog.interface';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  private baseUrl = 'http://localhost:8080/blog';

  constructor( private http: HttpClient ) { }
  getEntradas(): Observable<Entradas[]> {
    const url = `${this.baseUrl}/entradas`;
    return this.http.get<Entradas[]>(url);
  }
}
