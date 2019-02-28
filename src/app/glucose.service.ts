import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

    // Simulation of id incrementing
    lastId: number = 0;

    items: Glucose[] = [];
    constructor() { }

    addItem(glucose: Glucose) {

        if (!glucose.id) {
            glucose.id = ++this.lastId;
        }

        this.items.push(glucose);
        return this;
    }

    deleteTodoById(id: number): GlucoseService {

    }

    // deleteItemById(id: )

    getItems(): Observable<Glucose[]> {
        return of(ITEMS);
    }
}
