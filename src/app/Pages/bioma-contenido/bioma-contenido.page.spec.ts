import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiomaContenidoPage } from './bioma-contenido.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Crear un mock para ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: jasmine.createSpy('get').and.returnValue('{"bioma_id": "1", "bioma_nombre": "Bioma 1", "minecraft_bioma_id": "bioma_1", "bioma_descripcion": "Descripción del bioma 1"}'),
    }
  }
};

describe('BiomaContenidoPage', () => {
  let component: BiomaContenidoPage;
  let fixture: ComponentFixture<BiomaContenidoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiomaContenidoPage],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BiomaContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe recuperar datos de la ruta y asignarlos a x', () => {
    expect(component.x).toEqual({
      bioma_id: '1',
      bioma_nombre: 'Bioma 1',
      minecraft_bioma_id: 'bioma_1',
      bioma_descripcion: 'Descripción del bioma 1'
    });
  });
});