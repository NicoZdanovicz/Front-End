import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
