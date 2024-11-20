import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BdService } from 'src/app/services/bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class SQLiteMock {
  create() {
    return Promise.resolve({ executeSql: () => Promise.resolve() });
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: Platform, useValue: { ready: () => Promise.resolve() } },
        NativeStorage,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('Deberia crear la aplicacion', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});