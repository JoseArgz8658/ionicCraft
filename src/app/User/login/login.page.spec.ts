import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPage } from './login.page';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  const mockSQLite = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve()),
  };

  const mockBdService = {
    verificarUsuario: jasmine.createSpy('verificarUsuario').and.returnValue(Promise.resolve(true)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: SQLite, useValue: mockSQLite },
        { provide: BdService, useValue: mockBdService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar a verificarUsuario al iniciarSesion', async () => {
    component.usuario_apodo = 'testUser';
    component.usuario_password = 'testPass';

    await component.iniciarSesion();

    expect(mockBdService.verificarUsuario).toHaveBeenCalledWith('testUser', 'testPass');
  });

  it('Debe navegar al perfil si el inicio de sesión es exitoso', async () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    await component.iniciarSesion();
    expect(routerSpy).toHaveBeenCalledWith(['/perfil']);
  });
});