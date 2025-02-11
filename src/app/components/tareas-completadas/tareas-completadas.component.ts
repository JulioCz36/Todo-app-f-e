import { Component, OnInit } from '@angular/core';
import { TareasListService } from 'src/app/services/tareas-list.service';
import { TareaModel } from 'src/models/tareas.model';

@Component({
  selector: 'app-tareas-completadas',
  templateUrl: './tareas-completadas.component.html',
  styleUrls: ['./tareas-completadas.component.css'],
})
export class TareasCompletadasComponent implements OnInit {

  Eliminar: boolean = true;

  constructor(private tareasListService: TareasListService) {}
  
  tareasList: TareaModel[] = [];

  getTareasList(): void {
    this.tareasListService.getTareas().subscribe((tareasList) => {
      this.tareasList = tareasList
        .filter((tarea) => tarea.bool === true)
        .slice(); // Cambiado a false para mostrar tareas completadas
    });
  }

  ngOnInit(): void {
    this.getTareasList();
  }

  removeTareaToList(tareaToRemove: TareaModel): void {
    this.tareasListService.remove(tareaToRemove.id).subscribe(() => {
      this.getTareasList(); // Actualizar la lista después de eliminar
    });
  }

  eliminarTodasCompletadas(): void {
    this.tareasList.forEach((tarea) => {
      this.tareasListService.remove(tarea.id).subscribe(() => {
        this.getTareasList();
      });
    });
  }

  updateTarea(tarea: TareaModel): void {
    this.tareasListService.update(tarea).subscribe(() => {
      this.getTareasList(); // Actualizar la lista después de actualizar
    });
  }
}
