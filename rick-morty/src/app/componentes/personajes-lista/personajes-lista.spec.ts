import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesLista } from './personajes-lista';

describe('PersonajesLista', () => {
  let component: PersonajesLista;
  let fixture: ComponentFixture<PersonajesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
