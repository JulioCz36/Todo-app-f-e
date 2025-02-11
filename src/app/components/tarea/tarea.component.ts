import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaModel } from 'src/models/tareas.model';
import { TareasListService } from 'src/app/services/tareas-list.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  constructor(private tareasListService: TareasListService){}

  @Input() tareasData:any
  @Input() mostrarEliminar:any
  @Output() tareaRemove: EventEmitter<TareaModel> = new EventEmitter();
  @Output() updateTarea: EventEmitter<TareaModel> = new EventEmitter();

  

  ngOnInit(): void {
  }
  deleteTarea(tareaToDelete:TareaModel){
    //console.log("eliminar ", tareaToDelete);
    this.tareaRemove.emit(tareaToDelete);
  }
  emitUpdateTarea(tareaToBool:TareaModel): void {
    //console.log("Actualizamos ", tareaToBool);
    this.updateTarea.emit(tareaToBool);
  }
  
}
