import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCarritoViewComponent } from './mi-carrito-view.component';

describe('MiCarritoViewComponent', () => {
  let component: MiCarritoViewComponent;
  let fixture: ComponentFixture<MiCarritoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiCarritoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCarritoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
