import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toys } from '../interfaces/toys';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToysService {
  private _url: string = "http://localhost:8000/api/toys/"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getToys():Observable<Toys[]> {
    return this.http.get<Toys[]>(this._url)
  }
  getSortedToys(category):Observable<Toys[]> {
    return this.http.post<Toys[]>(this._url + 'category/', {name: category}, this.httpOptions)
  }
  getToyById(id):Observable<Toys> {
    return this.http.get<Toys>(this._url + id + '/')
  }
  create(toy): Observable<Toys> {
    return this.http.post<Toys>(this._url + 'admin/', toy, this.httpOptions)
  }
  update(toy): Observable<Toys> {
    return this.http.put<Toys>(this._url + 'admin/', toy, this.httpOptions)
  }
  delete(id): Observable<any> {
    return this.http.delete<any>(this._url + 'admin/' + id + '/')
  }
}
