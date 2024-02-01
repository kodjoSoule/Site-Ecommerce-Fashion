import { Component, NgModule, OnInit } from '@angular/core';
import { FashionProductService } from '../../../services/fashion-product.service';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FashionProductItemComponent } from '../fashion-product-item/fashion-product-item.component';
import { FashionProduct } from '../../../models/fashion-product';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-fashion-product-list',
  standalone: true,
  providers: [FashionProductService],
  imports: [
    RouterModule, DatePipe, NgxPaginationModule, CommonModule, FashionProductItemComponent,
     HttpClientModule,CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './fashion-product-list.component.html',
  styleUrl: './fashion-product-list.component.css'
})
export class FashionProductListComponent implements OnInit {
  loading: boolean = true;
  p: number = 1;
  products !: any[] ;
  filteredProducts: FashionProduct[] = [];

  constructor(private fashionProductService: FashionProductService) {
    this.fetchAndCacheProducts();
  }
  searchCriteriaT = {
    searchType: 'title',
    title: '',
    brand: '',
    category: '',
    minPrice: undefined,
    maxPrice: undefined
  };

recupereProduits(){
  this.fashionProductService.getAllFashionProducts()
  .subscribe({
// if data existe this.loading = false;

    next: (data) => {
      this.products = data;
      // this.loading = false;
    },
    error: (error) => {
      console.error(error);
      this.loading = false;
    }
  });
}

// Ajoutez cette méthode dans votre composant
onInputChange() {
}

  ngOnInit(){

  // this.fetchAndCacheProducts();
  }
  fetchAndCacheProducts() {
    this.fashionProductService.getAllFashionProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
          this.filteredProducts = [...this.products];
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      });
  }

}
