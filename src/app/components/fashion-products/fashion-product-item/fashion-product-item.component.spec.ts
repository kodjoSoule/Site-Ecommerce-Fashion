import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProductItemComponent } from './fashion-product-item.component';

describe('FashionProductItemComponent', () => {
  let component: FashionProductItemComponent;
  let fixture: ComponentFixture<FashionProductItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionProductItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
