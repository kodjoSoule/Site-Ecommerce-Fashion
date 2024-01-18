import { Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/authentication/login-user/login-user.component';
// import { RegisterComponent } from './components/authentication/register/register.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterUserComponent } from './components/authentication/register-user/register-user.component';
import { FashionProductListComponent } from './components/fashion-products/fashion-product-list/FashionProductListComponent';
import { FashionProductItemComponent } from './components/fashion-products/fashion-product-item/fashion-product-item.component';
import { FashionProductDetailsComponent } from './components/fashion-products/fashion-product-details/fashion-product-details.component';
import { FashionProductsOnSaleComponent } from './components/fashion-products/fashion-products-on-sale/fashion-products-on-sale.component';
import { CategoriesComponent } from './components/fashion-products/categories/categories.component';
import { ProductsByCategoryComponent } from './components/fashion-products/products-by-category/products-by-category.component';
import { StatisticComponent } from './components/fashion-products/statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { AdminListProductsComponent } from './admin-list-products/admin-list-products.component';
import { AuthGuard } from './services/auth-guard.service';




export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Accueill Fashion Kodjo', component: HomeComponent },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'login', title: 'Page de Connexion', component: LoginUserComponent },
    { path: 'register', title: 'Page d\'inscription', component: RegisterUserComponent },
    { path: 'products', title: 'Listes des produits', component: FashionProductListComponent },
    { path: 'products/:id', title: 'Detail d\'un produit', component: FashionProductDetailsComponent },
    { path : 'onSale', title: 'Listes des produits en promotion', component: FashionProductsOnSaleComponent },
    {path : 'categories', title: 'Listes des Categories par catégorie', component: CategoriesComponent},
    { path: 'categories/:category', title: 'Lists des produits par categorie', component: ProductsByCategoryComponent },
    { path: 'statistic', title: 'Statistic Fashion', component : StatisticComponent},

    // {path : 'admin', title : 'Administration', component: AdminListProductsComponent, canActivate: [AuthGuard]},
    //admin route  redirect to login if not logged in
    // {path : 'admin', title : 'Administration',redirectTo: 'login', pathMatch: 'full'},
    { path: 'admin',title : 'Administration', component: AdminListProductsComponent, canActivate: [AuthGuard] },



    { path: '**', component: NotFoundComponent }
];
