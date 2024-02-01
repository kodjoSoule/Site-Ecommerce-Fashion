import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionProductListComponent } from './FashionProductListComponent';

describe('FashionProductListComponent', () => {
  let component: FashionProductListComponent;
  let fixture: ComponentFixture<FashionProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashionProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
