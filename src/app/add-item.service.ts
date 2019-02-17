import { Injectable } from '@angular/core';
import { Glucose } from './glucose';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  items: Array<Glucose> = [];

  constructor() { }

  add(item: Glucose) {
      console.log('About to add item:', item);
      this.items.push(item);
  }
}
