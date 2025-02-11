import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTodoComponent } from './tareas-todo.component';

describe('TareasTodoComponent', () => {
  let component: TareasTodoComponent;
  let fixture: ComponentFixture<TareasTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
