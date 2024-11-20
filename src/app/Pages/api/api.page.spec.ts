import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiPage } from './api.page';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiPage', () => {
  let component: ApiPage;
  let fixture: ComponentFixture<ApiPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiPage],
      imports: [HttpClientModule],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});