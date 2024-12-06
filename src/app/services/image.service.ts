import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  cargarImagen(url: string) {
    return this.http.get(url, { responseType: 'blob' });
  }
}
