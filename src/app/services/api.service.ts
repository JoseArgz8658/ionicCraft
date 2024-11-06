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

  craftHead = 'https://crafthead.net/body/';

  constructor(private http:HttpClient) { }

  getSkin(skinPlayer: string):Observable<any>{
    return this.http.get<any>(this.craftHead+skinPlayer).pipe(retry(3));
  }

}
