import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
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

    deleteItemById(id: number): GlucoseService {

        this.items = this.items.filter(item => item.id !== id);
        return this;

    }

    updateItemById(id: number, values: Object = {}): Glucose {

        let item = this.getItemById(id);
        if (!item) {
            return null;
        }

        Object.assign(item, values);
        return item;

    }

    getAllItems(): Observable<Glucose[]> {
        return of(this.items);
    }

    getItemById(id: number): Glucose {
        return this.items
            .filter(item => item.id !== id)
            .pop();
    }
}
