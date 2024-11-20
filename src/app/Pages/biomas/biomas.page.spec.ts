import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiomasPage } from './biomas.page';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

const mockBdService = {
  dbState: jasmine.createSpy('dbState').and.returnValue(of(true)),
  fetchBiomas: jasmine.createSpy('fetchBiomas').and.returnValue(of([
    { bioma_id: '1', minecraft_bioma_id: 'bioma_1', bioma_nombre: 'Bioma 1', bioma_descripcion: 'Descripción del bioma 1' },
    { bioma_id: '2', minecraft_bioma_id: 'bioma_2', bioma_nombre: 'Bioma 2', bioma_descripcion: 'Descripción del bioma 2' }
  ])),
};

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('BiomasPage', () => {
  let component: BiomasPage;
  let fixture: ComponentFixture<BiomasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiomasPage],
      providers: [
        { provide: BdService, useValue: mockBdService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BiomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar biomas desde BdService', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.arregloBiomas.length).toBe(2);
    expect(component.arregloBiomas[0].bioma_nombre).toBe('Bioma 1');
  });
});