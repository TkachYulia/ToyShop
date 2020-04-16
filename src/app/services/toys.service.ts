import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toys } from '../interfaces/toys';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToysService {
  private _url: string = "assets/data/toys.json"
  constructor(private http: HttpClient) { }

  get():Observable<Toys[]> {
    return this.http.get<Toys[]>(this._url)
  }

  create(toy): Observable<Toys> {
    return this.http.post<Toys>(this._url, toy, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }
}
