import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUsuariosPage } from './update-usuarios.page';

describe('UpdateUsuariosPage', () => {
  let component: UpdateUsuariosPage;
  let fixture: ComponentFixture<UpdateUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
