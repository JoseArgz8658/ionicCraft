import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUsuariosPage } from './create-usuarios.page';

describe('CreateUsuariosPage', () => {
  let component: CreateUsuariosPage;
  let fixture: ComponentFixture<CreateUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
