import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductosCarritoComponent } from './detalles-productos-carrito.component';

describe('DetallesProductosCarritoComponent', () => {
  let component: DetallesProductosCarritoComponent;
  let fixture: ComponentFixture<DetallesProductosCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductosCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProductosCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
