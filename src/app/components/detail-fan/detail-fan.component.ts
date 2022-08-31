import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-detail-fan',
  templateUrl: './detail-fan.component.html',
  styleUrls: ['./detail-fan.component.scss']
})
export class DetailFanComponent implements OnInit {

  fan!: Fan;

  constructor(
    route: ActivatedRoute, 
    service: FanService,
    router: Router
  ) {
    const fan = service.getOne( route.snapshot.params['id'] );

    if( fan )
      this.fan = fan;
    else
      router.navigateByUrl("404")
  }

  ngOnInit(): void {
  }

}
