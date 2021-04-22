import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarListComponent } from './mostrar-list.component';

describe('MostrarListComponent', () => {
  let component: MostrarListComponent;
  let fixture: ComponentFixture<MostrarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
