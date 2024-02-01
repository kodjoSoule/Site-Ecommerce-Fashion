// analytics.component.ts
import { Component, NgModule, OnInit } from '@angular/core';
import { FashionProductService } from '../../../services/fashion-product.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [
    CommonModule, NgFor
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements OnInit {
  categoryAverageRating: any[] = [];
  bestRatedProducts: any[] = [];
productCategories: any[] = [];
  productCountByCategory: any= {
    category: "",
    count: 0

  };
  productCount: number = 0;
  categoriesProduct !: string[] ;
  produictCountByCategory !: { category: string, count: number } ;


  constructor(private fashionProductService: FashionProductService) {
    this.fashionProductService.getAllCategories().subscribe(data => {
      this.categoriesProduct = data;
    });
   }

  ngOnInit(): void {
    this.fashionProductService.getAllCategories().subscribe(data => {
      this.categoriesProduct = data;
    });
    this.loadAnalyticsData();

  }

  loadAnalyticsData(): void {
    // Récupérer les données d'analyse depuis le service FashionProductService

    // liste categories

    this.fashionProductService.getBestRatedProducts().subscribe(data => {
      this.bestRatedProducts = data;
    });


    this.fashionProductService.getCategoryAverageRating('Bags, Wallets & Belts').subscribe(data => {
      this.categoryAverageRating = data;
    });


    this.fashionProductService.getProductCountByCategory('Bags, Wallets & Belts').subscribe(data => {
      this.produictCountByCategory ={
        category: "Bags Wallets  Belts",
        count: data
      };
    });

    this.fashionProductService.getProductCount().subscribe(data => {
      this.productCount = data.count;
    });
  }
}


