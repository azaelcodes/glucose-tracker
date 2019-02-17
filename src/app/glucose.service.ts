import { Injectable } from '@angular/core';
import { Glucose } from 'glucose';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';
import {AddItemService} from "./add-item.service";

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

    constructor(private addItemService: AddItemService) { }

    getItems(): Observable<Glucose[]> {
        return of(ITEMS);
    }
}
