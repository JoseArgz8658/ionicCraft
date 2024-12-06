import { TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BdService } from 'src/app/services/bd.service';

// Mock de SQLite
const mockSQLite = {
  openDatabase: jasmine.createSpy('openDatabase').and.returnValue({
    executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve())
  })
};

// Mock de NativeStorage
const mockNativeStorage = {
  setItem: jasmine.createSpy('setItem').and.returnValue(Promise.resolve()),
  getItem: jasmine.createSpy('getItem').and.returnValue(Promise.resolve('mocked value')),
  remove: jasmine.createSpy('remove').and.returnValue(Promise.resolve())
};

describe('BdService', () => {
  let service: BdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BdService,
        { provide: SQLite, useValue: mockSQLite },
        { provide: NativeStorage, useValue: mockNativeStorage }
      ]
    });
    service = TestBed.inject(BdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});