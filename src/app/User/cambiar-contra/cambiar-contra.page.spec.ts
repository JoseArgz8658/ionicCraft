import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarContraPage } from './cambiar-contra.page';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
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

class RouterMock {
  navigate = jasmine.createSpy('navigate');
}

describe('CambiarContraPage', () => {
  let component: CambiarContraPage;
  let fixture: ComponentFixture<CambiarContraPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarContraPage],
      imports: [HttpClientTestingModule],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: NativeStorage, useClass: NativeStorageMock },
        { provide: Router, useClass: RouterMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});