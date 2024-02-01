import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProductsOnSaleComponent } from './fashion-products-on-sale.component';

describe('FashionProductsOnSaleComponent', () => {
  let component: FashionProductsOnSaleComponent;
  let fixture: ComponentFixture<FashionProductsOnSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionProductsOnSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashionProductsOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
