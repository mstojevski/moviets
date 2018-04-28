import { Component, OnInit, Input } from '@angular/core';
import { Trailer } from '../../models/trailer';
import { SafePipe } from '../../safe.pipe';

@Component({
  selector: 'mt-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
})
export class TrailerComponent implements OnInit {
  @Input() trailer: Trailer;
  constructor() {}

  ngOnInit() {}
}
