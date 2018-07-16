import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrailersService } from '../../services/trailers.service';
import { Trailer } from '../../models/trailer';

@Component({
  selector: 'mt-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  constructor(private ts: TrailersService) {}

  ngOnInit() {

  }
}
