import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTareasComponent } from './anadir-tareas.component';

describe('AnadirTareasComponent', () => {
  let component: AnadirTareasComponent;
  let fixture: ComponentFixture<AnadirTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
