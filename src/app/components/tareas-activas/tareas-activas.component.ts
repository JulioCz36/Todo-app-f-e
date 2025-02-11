import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TareasListService } from 'src/app/services/tareas-list.service';
import { TareaModel } from 'src/models/tareas.model';

@Component({
  selector: 'app-tareas-activas',
  templateUrl: './tareas-activas.component.html',
  styleUrls: ['./tareas-activas.component.css'],
})
export class TareasActivasComponent implements OnInit {
  constructor(
    private tareasListService: TareasListService,
    private cdr: ChangeDetectorRef
  ) {}

  tareasList: TareaModel[] = [];

  getTareasList(): void {
    this.tareasListService.getTareas().subscribe((tareasList) => {
      this.tareasList = tareasList
        .filter((tarea) => tarea.bool === false)
        .slice();
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.getTareasList();
  }

  addTarea(nuevaTarea: string): void {
    this.tareasListService.getTareas().subscribe((tareasList) => {
      let newId = 1;
      if (tareasList.length > 0) {
        const maxId = Math.max(...tareasList.map((tarea) => tarea.id));
        newId = maxId + 1;
      }
      const newTarea: TareaModel = {
        id: newId,
        tarea: nuevaTarea,
        bool: false,
      };
      this.tareasListService.add(newTarea).subscribe((tarea: TareaModel) => {
        this.tareasList.push(tarea);
      });
    });
  }
  

  updateTarea(tarea: TareaModel): void {
    this.tareasListService.update(tarea).subscribe(() => {
      this.getTareasList(); // Actualizar la lista después de actualizar
    });
  }
}
