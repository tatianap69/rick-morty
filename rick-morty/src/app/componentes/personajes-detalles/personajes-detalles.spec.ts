import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetalles } from './personajes-detalles';

describe('PersonajesDetalles', () => {
  let component: PersonajesDetalles;
  let fixture: ComponentFixture<PersonajesDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
