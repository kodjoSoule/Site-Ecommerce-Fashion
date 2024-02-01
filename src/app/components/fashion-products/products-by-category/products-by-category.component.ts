import { Component, NgModule } from '@angular/core';
import { FashionProductService } from '../../../services/fashion-product.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FashionProductItemComponent } from '../fashion-product-item/fashion-product-item.component';
import { FashionProduct } from '../../../models/fashion-product';

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [
FashionProductItemComponent,
    CommonModule, RouterLink, NgxPaginationModule, RouterModule, DatePipe, FormsModule, ReactiveFormsModule,

  ],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.css'
})
export class ProductsByCategoryComponent {
  loading: boolean = true;
  p: number = 1; // Page par défaut

  searchCriteria = {
    searchType: 'title',
    title: '',
    brand: '',
    category: '',
    minPrice: undefined,
    maxPrice: undefined
  };
  searchCriteriaT = {
    searchType: 'title',
    title: '',
    brand: '',
    category: '',
    minPrice: undefined,
    maxPrice: undefined
  };


  category: string = '';
  products: any[] = [];
  filteredProducts: FashionProduct[] = [];

  constructor(private route: ActivatedRoute, private fashionProductService: FashionProductService) { }

  search(): void {
    if (!this.searchCriteriaT || !this.searchCriteriaT.title) {
      this.filteredProducts = [...this.products]; // Réinitialiser la liste des produits filtrés
      return;
    }

    this.filteredProducts = this.products.filter(product => {
      switch (this.searchCriteriaT.searchType) {
        case 'title':
          return product.title.toLowerCase().includes(this.searchCriteriaT.title.toLowerCase());
        case 'brand':
          return product.brand.toLowerCase().includes(this.searchCriteriaT.brand.toLowerCase());
        case 'category':
          return product.category.toLowerCase().includes(this.searchCriteriaT.category.toLowerCase());
        // Ajoutez d'autres cas pour les autres critères de recherche
        default:
          return false;
      }
    });}

  // Ajoutez cette méthode dans votre composant
  onInputChange() {
    this.search();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      console.log(this.category);
      this.loadProductsByCategory();
    });
  }

  loadProductsByCategory(): void {
    if (this.category) {
      this.fashionProductService.getProductsByCategory(this.category)
        .subscribe(data => {
          this.products = data;
        });
    }
  }
}