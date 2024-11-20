import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UpdatePage } from './update.page';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';

const mockActivatedRoute = {
  queryParams: of({
    bioma: {
      bioma_id: '1',
      minecraft_bioma_id: 'bioma_1',
      bioma_nombre: 'Bioma 1',
      bioma_descripcion: 'Descripción del bioma 1',
    },
  }),
};

const mockRouter = {
  navigate: jasmine.createSpy('navigate'),
  getCurrentNavigation: () => ({
    extras: { state: { bioma: { 
        bioma_id: '1', 
        minecraft_bioma_id: 'bioma_1', 
        bioma_nombre: 'Bioma 1', 
        bioma_descripcion: 'Descripción del bioma 1' 
      } } },
  }),
};

const mockBdService = {
  actualizarBioma: jasmine.createSpy('actualizarBioma').and.returnValue(Promise.resolve()),  // Mock a resolved promise
};

describe('UpdatePage', () => {
  let component: UpdatePage;
  let fixture: ComponentFixture<UpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePage],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: BdService, useValue: mockBdService },
        AlertController,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia cargar datos de bioma desde queryParams', () => {
    expect(component.biomas).toEqual({
      bioma_id: '1',
      minecraft_bioma_id: 'bioma_1',
      bioma_nombre: 'Bioma 1',
      bioma_descripcion: 'Descripción del bioma 1',
    });
  });

  it('Deberia llamar a actualizarBioma cuando se llame a la actualizacion', fakeAsync(async () => {
    component.biomas = {
      bioma_id: '1',
      minecraft_bioma_id: 'bioma_1',
      bioma_nombre: 'Bioma 1',
      bioma_descripcion: 'Descripción actualizada',
    };
    await component.update();
    tick();
    expect(mockBdService.actualizarBioma).toHaveBeenCalledWith(
      '1',
      'bioma_1',
      'Bioma 1',
      'Descripción actualizada'
    );
  }));
});