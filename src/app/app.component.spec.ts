import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule, // Importar el módulo para HttpClient
      ],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: Platform, useValue: { ready: () => Promise.resolve() } },
        { provide: NativeStorage, useClass: NativeStorageMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('Deberia crear la aplicacion', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});