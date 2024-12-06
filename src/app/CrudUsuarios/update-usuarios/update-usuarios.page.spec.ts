import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUsuariosPage } from './update-usuarios.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockActivatedRoute = {
  queryParams: of({
    usuario: {
      usuario_id: '1',
      usuario_apodo: 'Usuario Prueba',
      usuario_tipo: 'Admin',
      usuario_gmail: 'usuario@prueba.com',
      usuario_password: 'Contraseña123'
    }
  }),
  snapshot: {
    paramMap: {
      get: jasmine.createSpy('get').and.returnValue('1')
    }
  }
};

class SQLiteMock {
  openDatabase() {
    return Promise.resolve({
      executeSql: () => Promise.resolve()
    });
  }
}

class NativeStorageMock {
  setItem(key: string, value: any) {
    return Promise.resolve();
  }

  getItem(key: string) {
    return Promise.resolve('mocked value');
  }

  remove(key: string) {
    return Promise.resolve();
  }
}

describe('UpdateUsuariosPage', () => {
  let component: UpdateUsuariosPage;
  let fixture: ComponentFixture<UpdateUsuariosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUsuariosPage],
      imports: [HttpClientTestingModule],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: NativeStorage, useClass: NativeStorageMock },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateUsuariosPage);
    component = fixture.componentInstance;

    mockActivatedRoute.queryParams.subscribe((params) => {
      component.usuarios = params.usuario;
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});