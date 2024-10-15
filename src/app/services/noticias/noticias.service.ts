import { Injectable } from '@angular/core';
import { environment } from '../../recursos/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  apiUrl = environment.apiUrl + 'noticias';
  
  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
