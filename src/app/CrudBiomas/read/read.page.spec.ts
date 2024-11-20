import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadPage } from './read.page';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';
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

class RouterMock {
  navigate = jasmine.createSpy('navigate');
}

describe('ReadPage', () => {
  let component: ReadPage;
  let fixture: ComponentFixture<ReadPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadPage],
      providers: [
        BdService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: NativeStorage, useClass: NativeStorageMock },
        { provide: Router, useClass: RouterMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});