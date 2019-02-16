import { Injectable } from '@angular/core';
import { Glucose } from 'glucose';
import { ITEMS } from 'mock-items';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

    constructor() { }

    getItems(): Glucose[] {
        return ITEMS;
    }
}
