import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  mojangAPIURL = 'https://api.mojang.com/users/profiles/minecraft/';
  mineatarAPIURL = 'https://api.mineatar.io/body/full/';

  constructor(private http:HttpClient) { }

  getId(id: any):Observable<any>{
    return this.http.get<any>(this.mojangAPIURL+id).pipe(retry(3));
  }

  getSkin(player: string):Observable<any>{
    return this.http.get<any>(this.mineatarAPIURL+player).pipe(retry(3));
  }

}
