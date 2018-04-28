import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrailersService } from '../services/trailers.service';
import { Trailer } from '../models/trailer';

@Component({
  selector: 'mt-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  filterTrailers: Trailer[];
  trailers: Trailer[];
  @ViewChild('filterType') filterTypeSelect: ElementRef;

  constructor(private ts: TrailersService) {}

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
}
