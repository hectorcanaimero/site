import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getJson(file: string): Observable<any> {
    return this.http.get<any>(`./assets/json/${file}.json`)
    .pipe(tap(data => data)).pipe(take(1));
  }
}
