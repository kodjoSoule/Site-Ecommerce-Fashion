import { Component, OnInit } from '@angular/core';
import { FashionProduct } from '../../../models/fashion-product';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
@Component({
  selector: 'app-fashion-product-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './fashion-product-details.component.html',
  styleUrl: './fashion-product-details.component.css'
})
export class FashionProductDetailsComponent implements OnInit{
  @Input()
    product!: FashionProduct;

    constructor(private location : Location) {

    }

    ngOnInit(): void {
      // Récupérer les données du produit à partir du state de la navigation
      this.product = history.state.product;
    }

      goBack(): void {
        this.location.back();
      }
    }


