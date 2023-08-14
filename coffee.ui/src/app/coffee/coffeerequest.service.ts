import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { coffeeBuyResponse } from '../models/coffeeBuyResponse.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeerequestService {

  httpOptions = { headers: new HttpHeaders({
    'Access-Control-Allow-Origin': `${environment.baseURL}` 
  })}

  constructor(private http: HttpClient) { 
  }

  postBuyCoffeeButton() : Observable<coffeeBuyResponse> {
    return this.http.post<coffeeBuyResponse>(`${environment.baseURL}/CoffeeBuy/BuyCoffee`, "", this.httpOptions);
  }
}
