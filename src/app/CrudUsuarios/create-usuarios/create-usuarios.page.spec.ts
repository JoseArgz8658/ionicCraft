import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUsuariosPage } from './create-usuarios.page';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Mock de SQLite
class SQLiteMock {
  create() {
    return Promise.resolve({
      executeSql: () => Promise.resolve(),
    });
  }
}

// Mock de NativeStorage
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

describe('CreateUsuariosPage', () => {
  let component: CreateUsuariosPage;
  let fixture: ComponentFixture<CreateUsuariosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUsuariosPage],
      imports: [HttpClientTestingModule],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: NativeStorage, useClass: NativeStorageMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});