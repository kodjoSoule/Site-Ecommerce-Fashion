import { CommonModule } from '@angular/common';
import { Component, OnInit, inject,  } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FashionProductService } from '../../services/fashion-product.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'fashion-app';
  categoriesProduct !: any ;
  bestRatedProducts !: any ;
  product: any = {};
  constructor(private fashionProductService: FashionProductService) {
  }
  router = inject(Router);
  viewDetails(): void {
    // Utilisez navigateByUrl pour naviguer vers une autre page avec l'ID du produit
    this.router.navigateByUrl(`/products/${this.product._id}`, { state: { product: this.product } });
  }
  ngOnInit(): void {

    this.getBestRatedProducts();

  }

  getBestRatedProducts() {
    this.fashionProductService.getBestRatedProducts()
    .subscribe(res => {
      this.bestRatedProducts = res;
    });
  }

}
