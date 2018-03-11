import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Trailer } from '../models/trailer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// const API_KEY = '3bf2d43612aaa8e0a5a9302e6a0e9021';
const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=3bf2d43612aaa8e0a5a9302e6a0e9021&append_to_response=videos';

@Injectable()
export class TrailersService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Trailer[]> {
    return this.http
      .get(API_URL)
      .map((data: any) => data.results as Trailer[])
      .do(data => console.log(data));
  }
  // Get single movie
  getMovie(id: number): Observable<Trailer> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3bf2d43612aaa8e0a5a9302e6a0e9021&append_to_response=videos`;
    
    return this.http.get(url)
      .map((data: any) => data as Trailer);
  }
}
