import { Injectable } from '@angular/core';
import { Glucose } from 'glucose';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

    constructor() { }

    getItems(): Observable<Glucose[]> {
        return of(ITEMS);
    }
}
