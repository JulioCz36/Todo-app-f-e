import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anadir-tareas',
  templateUrl: './anadir-tareas.component.html',
  styleUrls: ['./anadir-tareas.component.css']
})
export class AnadirTareasComponent implements OnInit {

  @Output() tareaAgregada: EventEmitter<string> = new EventEmitter<string>();
  nuevaTarea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareaAgregada.emit(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpiar el campo después de emitir el evento
    }
  }
  

}
