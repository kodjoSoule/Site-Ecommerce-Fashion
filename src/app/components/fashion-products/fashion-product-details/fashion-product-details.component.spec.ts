import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProductDetailsComponent } from './fashion-product-details.component';

describe('FashionProductDetailsComponent', () => {
  let component: FashionProductDetailsComponent;
  let fixture: ComponentFixture<FashionProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashionProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
