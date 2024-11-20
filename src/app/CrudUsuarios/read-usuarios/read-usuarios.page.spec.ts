import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadUsuariosPage } from './read-usuarios.page';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

class SQLiteMock {
  create() {
    return Promise.resolve({ executeSql: () => Promise.resolve() });
  }
}

class NativeStorageMock {
  setItem(key: string, value: any) {
    return Promise.resolve();
  }
  getItem(key: string) {
    return Promise.resolve();
  }
  remove(key: string) {
    return Promise.resolve();
  }
}

describe('ReadUsuariosPage', () => {
  let component: ReadUsuariosPage;
  let fixture: ComponentFixture<ReadUsuariosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadUsuariosPage],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: NativeStorage, useClass: NativeStorageMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});