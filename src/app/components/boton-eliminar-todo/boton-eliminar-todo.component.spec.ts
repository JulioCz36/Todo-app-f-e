import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEliminarTodoComponent } from './boton-eliminar-todo.component';

describe('BotonEliminarTodoComponent', () => {
  let component: BotonEliminarTodoComponent;
  let fixture: ComponentFixture<BotonEliminarTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEliminarTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonEliminarTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
