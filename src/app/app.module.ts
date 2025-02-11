import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BotonEliminarTodoComponent } from './components/boton-eliminar-todo/boton-eliminar-todo.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareasActivasComponent } from './components/tareas-activas/tareas-activas.component';
import { AnadirTareasComponent } from './components/anadir-tareas/anadir-tareas.component';
import { TareasCompletadasComponent } from './components/tareas-completadas/tareas-completadas.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { TareasTodoComponent } from './components/tareas-todo/tareas-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BotonEliminarTodoComponent,
    TareaComponent,
    TareasActivasComponent,
    AnadirTareasComponent,
    TareasCompletadasComponent,
    EliminarComponent,
    TareasTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
