import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiomaContenidoPage } from './bioma-contenido.page';

describe('BiomaContenidoPage', () => {
  let component: BiomaContenidoPage;
  let fixture: ComponentFixture<BiomaContenidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiomaContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
