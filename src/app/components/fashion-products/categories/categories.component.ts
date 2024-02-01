import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FashionProductService } from '../../../services/fashion-product.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
CommonModule, RouterOutlet, RouterModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoriesProduct = [];
  produitsByCategorie = [];
  constructor(private fashionProductService: FashionProductService) {
    this.getCategoriesProduct();
  }
  getCategoriesProduct() {
    this.fashionProductService.getAllCategories()
    .subscribe(res => {
      this.categoriesProduct = res;
    });
  }
  getProductsByCategory(category: string) {
    this.fashionProductService.getProductsByCategory(category)
    .subscribe(res => {
      this.produitsByCategorie = res;
    });
  }
  ngOnInit(): void {
    this.getCategoriesProduct();
  }
}
