import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
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

  craftHeadArmorBody = 'https://crafthead.net';

  constructor(private http:HttpClient) { }

  getSkinArmorBody(nickName: any):Observable<any>{
    return this.http.get(this.craftHeadArmorBody+'/armor/body/'+nickName).pipe(retry(3));
  }

}
