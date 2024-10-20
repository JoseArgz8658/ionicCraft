import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadUsuariosPage } from './read-usuarios.page';

describe('ReadUsuariosPage', () => {
  let component: ReadUsuariosPage;
  let fixture: ComponentFixture<ReadUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
