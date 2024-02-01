import { Component, Inject, Input, OnInit  } from '@angular/core';
import { FashionProduct } from '../../../models/fashion-product';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-fashion-product-item',
  standalone: true,
  imports: [],
  templateUrl: './fashion-product-item.component.html',
  styleUrl: './fashion-product-item.component.css'
})
export class FashionProductItemComponent {
  @Input()
  product!: FashionProduct;

router = inject(Router);
viewDetails(): void {
  this.router.navigateByUrl(`/products/${this.product._id}`, { state: { product: this.product } });
}
}
