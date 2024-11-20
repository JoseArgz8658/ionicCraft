import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';

import { RouterTestingModule } from '@angular/router/testing';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { By } from '@angular/platform-browser';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  const mockSQLite = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve()),
  };

  const mockBdService = {
    obtenerUsuarioActivo: jasmine.createSpy('obtenerUsuarioActivo').and.returnValue(Promise.resolve(null)),
    cerrarSesion: jasmine.createSpy('cerrarSesion').and.returnValue(Promise.resolve()),
  };

  const mockNativeStorage = {
    getItem: jasmine.createSpy('getItem').and.returnValue(Promise.resolve(null)),
    setItem: jasmine.createSpy('setItem').and.returnValue(Promise.resolve()),
    remove: jasmine.createSpy('remove').and.returnValue(Promise.resolve()),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: SQLite, useValue: mockSQLite },
        { provide: BdService, useValue: mockBdService },
        { provide: NativeStorage, useValue: mockNativeStorage },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería el botón "Iniciar sesión" redirigir a la página login', () => {
    const button = fixture.debugElement.query(By.css('ion-button[routerLink="/login"]'));
    expect(button).toBeTruthy();

    const routerLink = button.attributes['routerLink'];
    expect(routerLink).toBe('/login');
  });
});