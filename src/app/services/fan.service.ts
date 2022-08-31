import { Injectable } from '@angular/core';
import { Fan, FanCreateForm } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fans: Fan[] = [
    {
      id: 1,
      nom: "fan",
      dateNaiss: new Date(),
      series: [ "dora", "breaking bad" ]
    }
  ];
  
  private _nextID: number = 2;

  constructor() { }

  // récupérer tous
  getAll(): Fan[] {
    return [...this._fans];
  }

  // récupérer un
  getOne( id: number ): Fan | undefined {
    return this._fans.find( fan => fan.id == id  )
  }

  // ajouter
  add( form: FanCreateForm ): number{
    const id = this._nextID++;

    this._fans.push({
      id: id,
      nom: form.nom,
      dateNaiss: new Date(form.dateNaiss),
      series: []
    })

    return id;
  }

  // // modifier
  // update( id: number,  )


}
