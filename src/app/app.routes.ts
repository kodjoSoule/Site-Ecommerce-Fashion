import { Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';


import { NotFoundComponent } from './components/not-found/not-found.component';

import { FashionProductListComponent } from './components/fashion-products/fashion-product-list/FashionProductListComponent';
import { FashionProductItemComponent } from './components/fashion-products/fashion-product-item/fashion-product-item.component';
import { FashionProductDetailsComponent } from './components/fashion-products/fashion-product-details/fashion-product-details.component';
import { FashionProductsOnSaleComponent } from './components/fashion-products/fashion-products-on-sale/fashion-products-on-sale.component';
import { CategoriesComponent } from './components/fashion-products/categories/categories.component';
import { ProductsByCategoryComponent } from './components/fashion-products/products-by-category/products-by-category.component';
import { StatisticComponent } from './components/fashion-products/statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { AdminListProductsComponent } from './admin-list-products/admin-list-products.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Accueill Fashion Kodjo', component: HomeComponent },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'products', title: 'Listes des produits', component: FashionProductListComponent },
    { path: 'products/:id', title: 'Detail d\'un produit', component: FashionProductDetailsComponent },
    { path : 'onSale', title: 'Listes des produits en promotion', component: FashionProductsOnSaleComponent },
    {path : 'categories', title: 'Listes des Categories par catégorie', component: CategoriesComponent},
    { path: 'categories/:category', title: 'Lists des produits par categorie', component: ProductsByCategoryComponent },
    { path: 'statistic', title: 'Statistic Fashion', component : StatisticComponent},

    { path: 'admin',title : 'Administration', component: AdminListProductsComponent},

    { path: '**', component: NotFoundComponent }
];
