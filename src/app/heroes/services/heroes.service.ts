import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroment';
import { Hero } from '../interfaces/heroe.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = enviroments.baseUrl;

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getHeroeById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
}
