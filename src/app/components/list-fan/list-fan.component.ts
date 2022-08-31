import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-list-fan',
  templateUrl: './list-fan.component.html',
  styleUrls: ['./list-fan.component.scss']
})
export class ListFanComponent implements OnInit {

  fans: Fan[];

  constructor(private _service: FanService) {
    this.fans = _service.getAll();
  }

  ngOnInit(): void {
  }

}
