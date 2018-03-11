import { Component, OnInit } from '@angular/core';
import { TrailersService } from '../../services/trailers.service';
import { Trailer } from '../../models/trailer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  trailers$: Observable<Trailer[]>;
  constructor(private ts: TrailersService) {}

  ngOnInit() {
    this.trailers$ = this.ts.getMovies();
  }
}
