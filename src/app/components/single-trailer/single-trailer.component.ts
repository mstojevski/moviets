import { Component, OnInit } from '@angular/core';
import { TrailersService } from '../../services/trailers.service';
import { Observable } from 'rxjs/Observable';
import { Trailer } from '../../models/trailer';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'mt-single-trailer',
  templateUrl: './single-trailer.component.html',
  styleUrls: ['./single-trailer.component.scss'],
})
export class SingleTrailerComponent implements OnInit {
  youtubePrefix = 'https://www.youtube.com/embed/';
  trailer$: Observable<Trailer>;
  constructor(
    private ts: TrailersService,
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}

  getMovie(id: number) {
    return this.ts.getTrailer(id);
  }
  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.trailer$ = this.getMovie(id);
  }
}
