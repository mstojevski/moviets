import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrailersService } from '../services/trailers.service';
import { Trailer } from '../models/trailer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  filterTrailers: Trailer[];
  trailers: Trailer[];
  searchTerm;
  searchResults$: Observable<Trailer[]>;
  @ViewChild('filterType') filterTypeSelect: ElementRef;

  constructor(private ts: TrailersService, private http: HttpClient) {}

  ngOnInit() {
    this.ts.getTrailers().subscribe((data: any) => {
      this.trailers = data.results;
      this.filterTrailers = this.trailers;
    });
  }
  filterGenre(genre: number): void {
    this.filterTrailers = this.trailers.filter(t => {
      for (let i = 0; i < t.genre_ids.length; i++) {
        if (t.genre_ids[i] === +genre) {
          return true;
        }
      }
      return false;
    });
  }

  newSearch(searchTerm) {
    this.searchResults$ = this.ts.getSearchedMovies(searchTerm);
  }
}
