import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url:string = "http://localhost:8000/api/cats/ "
  constructor(private http: HttpClient) {}

  get(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url)
  }
}
