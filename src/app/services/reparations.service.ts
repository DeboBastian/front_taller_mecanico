import { Injectable } from '@angular/core';
import { Reparation } from '../interfaces/mechanic.interface';

@Injectable({
  providedIn: 'root'
})
export class ReparationsService {
  
  arrReparations = [];

  constructor() {
    this.arrReparations;
  }
  
  //Me devuelve todo el array
  getAll(): Reparation[] {
    return this.arrReparations;
  }

}
