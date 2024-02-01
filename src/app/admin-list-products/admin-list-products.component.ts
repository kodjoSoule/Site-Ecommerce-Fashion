
import { Component, NgModule, OnInit } from '@angular/core';
import { FashionProductService } from '../services/fashion-product.service';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FashionProductItemComponent } from '../components/fashion-products/fashion-product-item/fashion-product-item.component';
import { FashionProduct } from '../models/fashion-product';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Observable, from } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-admin-list-products',
  standalone: true,
  imports: [
FashionProductItemComponent,
RouterModule, DatePipe, NgxPaginationModule, CommonModule, FashionProductItemComponent,
    HttpClientModule,CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './admin-list-products.component.html',
  styleUrl: './admin-list-products.component.css'
})
export class AdminListProductsComponent implements OnInit{



  loading: boolean = true;
  p: number = 1; // Page par défaut



  products !: any[] ;
  filteredProducts: FashionProduct[] = [];
  // searchCriteria: string = '';
  // searchTerm: string = '';
  searchCriteria = {
    searchType: 'title',
    title: '',
    brand: '',
    category: '',
    minPrice: undefined,
    maxPrice: undefined
  };
  constructor(private fashionProductService: FashionProductService, private modalService: NgbModal) {}
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
    next: (data) => {
      this.products = data;
      this.loading = false;
    },
    error: (error) => {
      console.error(error);
      this.loading = false;
    }
  });
}
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


  ngOnInit(){
     // Essayez de récupérer les données à partir du stockage local
     const cachedProducts = localStorage.getItem('cachedProducts');

     if (cachedProducts) {
       this.products = JSON.parse(cachedProducts);
       this.loading = false;
     } else {
       this.fetchAndCacheProducts();
     }
  }
  fetchAndCacheProducts() {
    this.fashionProductService.getAllFashionProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;

          // Stockez les données dans le stockage local pour la prochaine visite
          localStorage.setItem('cachedProducts', JSON.stringify(data));
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      });
  }



  addProduct(): void {
    const modalRef = this.modalService.open(ProductModalComponent);
    // Configurer le modalRef si nécessaire
    modalRef.result.then(
      (result) => {
        // Traitement après fermeture du modal (si besoin)
      },
      (reason) => {
        // Traitement après fermeture du modal sans sauvegarde (si besoin)
      }
    );
  }

  editProduct(product: FashionProduct): void {
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = { ...product }; // Passer le produit au composant modal
    // Configurer le modalRef si nécessaire
    modalRef.result.then(
      (result) => {
        // Traitement après fermeture du modal (si besoin)
      },
      (reason) => {
        // Traitement après fermeture du modal sans sauvegarde (si besoin)
      }
    );
  }
  deleteProduct(product: FashionProduct): void {
    this.confirmDelete().subscribe((result) => {
      if (result) {
        // Supprimer le produit
        this.fashionProductService.deleteFashionProductById(product._id)
          .subscribe({
            next: () => {
              // Rafraîchir la liste des produits après la suppression
              this.recupereProduits();
            },
            error: (error) => console.error(error)
          });


        // Rafraîchir la liste des produits après la suppression
        this.recupereProduits();

      }
    });
  }
  confirmDelete(): Observable<boolean> {
    const modalRef = this.modalService.open(ConfirmDialogComponent, { centered: true });
    modalRef.componentInstance.message = 'Voulez-vous vraiment supprimer ce produit ?';
    return from(modalRef.result);
  }
    onInputChange(): void {
    // Implémentez la logique de recherche en temps réel ici
    console.log('Recherche en temps réel');
  }


}
