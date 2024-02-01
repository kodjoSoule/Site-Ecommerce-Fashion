import { Component, OnInit } from '@angular/core';

import { FashionProductService } from '../../../services/fashion-product.service';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements OnInit {
  categoryAverageRating: any[] = [];
  bestRatedProducts: any[] = [];
  productCountByCategory: any[] = [];
  productCount: number = 0;
  categoriesProduct !: string[] ;
  produictCountByCategory ={category: '',count: 0};


  constructor(private fashionProductService: FashionProductService) { }

  ngOnInit(): void {
    this.loadAnalyticsData();
    this.recupereProduitsByCategory();
    console.log(this.produictCountByCategory);
  }

  loadAnalyticsData(): void {
    this.fashionProductService.getProductCount().subscribe(data => {
      this.productCount = data;
    });
    this.fashionProductService.getCategoryAverageRating().subscribe(data => {
      this.categoryAverageRating = data;
    });

    this.fashionProductService.getBestRatedProducts().subscribe(data => {
      this.bestRatedProducts = data;
    });


    this.fashionProductService.getProductCount().subscribe(data => {
      this.productCount = data.count;
    });
  }
  recupereProduitsByCategory(){
    for(let category of this.categoriesProduct){
      this.fashionProductService.getProductsByCategory(category)
      .subscribe(res => {
        this.produictCountByCategory.category = category;
        this.produictCountByCategory.count = res;
      });
    }
  }
  getProductsByCategory(category: string) {
    this.fashionProductService.getProductsByCategory(category)
    .subscribe(res => {
      this.produictCountByCategory = res;
    });
  }
  getCategoriesProduct() {
    this.fashionProductService.getAllCategories()
    .subscribe(res => {
      this.categoriesProduct = res;
    });
  }

}
