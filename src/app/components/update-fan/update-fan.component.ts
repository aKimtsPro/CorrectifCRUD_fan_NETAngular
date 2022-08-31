import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-update-fan',
  templateUrl: './update-fan.component.html',
  styleUrls: ['./update-fan.component.scss']
})
export class UpdateFanComponent implements OnInit {

  fan!: Fan;
  serie: string = '';

  constructor(route: ActivatedRoute, service: FanService, router: Router) { 

    const id = route.snapshot.params['id'];
    const fan = service.getOne(id);

    if(fan)
      this.fan = fan
    else  
      router.navigateByUrl('/404')

  }

  ngOnInit(): void {
  }

  onAdd(){
    this.fan.series.push( "truc show" );
    this.serie = '';
  }

  delete(index: number){
    this.fan.series.splice(index, 1);
  }

}
