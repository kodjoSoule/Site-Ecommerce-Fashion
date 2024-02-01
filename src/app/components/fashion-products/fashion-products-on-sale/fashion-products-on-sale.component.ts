import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FashionProductItemComponent } from '../fashion-product-item/fashion-product-item.component';
import { FashionProduct } from '../../../models/fashion-product';
import { NgxPaginationModule } from 'ngx-pagination';
import { FashionProductService } from '../../../services/fashion-product.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fashion-products-on-sale',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FashionProductItemComponent, NgxPaginationModule, ReactiveFormsModule,FormsModule],
  templateUrl: './fashion-products-on-sale.component.html',
  styleUrl: './fashion-products-on-sale.component.css'
})
export class FashionProductsOnSaleComponent {
category: string = '';
  loading: boolean = true;
  p: number = 1; // Page par défaut



  products !: any[] ;

  constructor(private fashionProductService: FashionProductService,

    ) {

  }

onInputChange() {

}
  ngOnInit(){
       this.recupereProduits();




  }
  recupereProduits() {
    this.fashionProductService.getOnSaleProducts()
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


}
