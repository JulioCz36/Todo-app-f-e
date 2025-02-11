import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TareaModel } from 'src/models/tareas.model';

@Injectable({
  providedIn: 'root',
})
export class TareasListService {
  constructor(private http: HttpClient) {}

  private tareasUrl = 'api/tareas';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.statusText}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTareas(): Observable<TareaModel[]> {
    return this.http
      .get<TareaModel[]>(this.tareasUrl)
      .pipe(catchError(this.handleError<TareaModel[]>('getTareas', [])));
  }
  
  add(tareaAdd: TareaModel) {
    return this.http.post<TareaModel>(this.tareasUrl, tareaAdd,this.httpOptions).pipe(
      tap((newTarea: TareaModel) => console.log(newTarea.tarea)),
      catchError(this.handleError<TareaModel>('addTarea'))
    );
  }
  
  remove(id: number):Observable<TareaModel>{
    const url = `${this.tareasUrl}/${id}`;

    return this.http.delete<TareaModel>(url,this.httpOptions).pipe(
      tap(()=> console.log(`deleted tarea id = ${id}`)),
      catchError(this.handleError<TareaModel>('deleteTarea'))
    );
  }

  update(tarea: TareaModel): Observable<any> {
    const url = `${this.tareasUrl}/${tarea.id}`; // URL específica de la tarea
    return this.http.put(url, tarea, this.httpOptions).pipe(
      tap(_ => console.log(`Tarea actualizada: ${tarea.id}`)),
      catchError(this.handleError<any>('updateTarea'))
    );
  }
  
}
