import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ZooServiceService {

  private apiUrl = 'assets/json/animals.json';
  private serviceurl = environment.serviceUrl+ "Zoo/";
  constructor(private http: HttpClient) { }

  getAnimalsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getAnimalsDataForDashBoard(): Observable<any[]> {
    
    return this.http.get<any[]>(this.serviceurl);
  }
  GetDashBoarddata(): Observable<any> {
    debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    return this.http.get<any>(this.serviceurl + 'calculateFoodExpenses', httpOptions);;
  }
}
