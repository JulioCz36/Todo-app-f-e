import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TareaModel } from 'src/models/tareas.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const tareas: TareaModel[] = [];
    return { tareas };
  }
}
