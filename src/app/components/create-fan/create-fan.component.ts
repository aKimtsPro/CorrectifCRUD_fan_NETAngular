import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FanService } from 'src/app/services/fan.service';
import { ValidAge } from './validators';


@Component({
  selector: 'app-create-fan',
  templateUrl: './create-fan.component.html',
  styleUrls: ['./create-fan.component.scss']
})
export class CreateFanComponent implements OnInit {

  form: FormGroup;

  constructor( 
    builder: FormBuilder, 
    private _service: FanService,
    private _router: Router
  ) {
    this.form = builder.group({
      nom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      dateNaiss: [null, [Validators.required, ValidAge]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.form.valid ){
      const id = this._service.add( this.form.value );
      this._router.navigate( ['detail', id] )
    }
  }

}
