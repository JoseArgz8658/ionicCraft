import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePage } from './create.page';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

const mockBdService = {
  agregarBiomas: jasmine.createSpy('agregarBiomas').and.returnValue(of(true)),
};

const mockRouter = {
  navigate: jasmine.createSpy('navigate'),
};

const mockAlertController = {
  create: jasmine.createSpy('create').and.callFake(() => {
    return Promise.resolve({
      present: jasmine.createSpy('present'),
    });
  }),
};

describe('CreatePage', () => {
  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePage],
      providers: [
        { provide: BdService, useValue: mockBdService },
        { provide: Router, useValue: mockRouter },
        { provide: AlertController, useValue: mockAlertController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});