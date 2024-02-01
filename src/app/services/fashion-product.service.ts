import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FashionProduct } from '../models/fashion-product';
import { HttpParams } from '@angular/common/http';
// const  apiUrl = 'http://localhost:3000/api/v1';
const  apiUrl = 'https://fashion-products-api.onrender.com/api/v1';



@Injectable({providedIn: 'root'})
export class FashionProductService{
  constructor(private http: HttpClient) {}

  getOnSaleProducts(): Observable<FashionProduct[]> {
    return this.http.get<FashionProduct[]>(`${apiUrl}/onSale`);
  }


  getAllFashionProducts() : Observable<FashionProduct[]>{
    return this.http.get<FashionProduct[]>(`${apiUrl}/products`);
  }
  getFashionProductById(id: string): Observable<FashionProduct> {
    return this.http.get<FashionProduct>(`${apiUrl}/products/${id}`);
  }

  addFashionProduct(product: FashionProduct): Observable<FashionProduct> {
    return this.http.post<FashionProduct>(`${apiUrl}/products`, product);
  }

  updateFashionProductById(id: string, product: FashionProduct): Observable<FashionProduct> {
    return this.http.put<FashionProduct>(`${apiUrl}/products/${id}`, product);
  }

  deleteFashionProductById(id: string): Observable<any> {
    return this.http.delete(`${apiUrl}/products/${id}`);
  }
  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/categories`);
  }
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${apiUrl}/categories/${category}`);
  }

  getBestRatedProducts(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/bestRated`);
  }
  getCategoryAverageRating(
category : string
  ){
    return this.http.get<any>(`${apiUrl}/${category}/averageRating/`);
  }
  searchProducts(criteria: any): Observable<FashionProduct[]> {
    const url = `${apiUrl}/search`;
    return this.http.post<FashionProduct[]>(url, criteria);
  }


  getProductCountByCategory( category : string){
    return this.http.get<any>(`${apiUrl}/${category}/count/`);
  }


  getProductCount(){
    return this.http.get<any>(`${apiUrl}/count`);
  }




  search(criteria: any): Observable<FashionProduct[]> {
    // Construire les paramètres de requête en fonction des critères fournis
    let params = new HttpParams();
    if (criteria.title) {
      params = params.set('title', criteria.title);
    }
    if (criteria.brand) {
      params = params.set('brand', criteria.brand);
    }
    if (criteria.category) {
      params = params.set('category', criteria.category);
    }
    // Ajoutez d'autres critères au besoin

    // Effectuer la requête avec les paramètres construits
    return this.http.get<FashionProduct[]>(`${apiUrl}/products/search`, { params });
  }
  // Exemple d'utilisation avec recherche par titre
  findByTitle(title: string): Observable<FashionProduct[]> {
    return this.http.get<FashionProduct[]>(`${apiUrl}/products?title=${title}`);
  }

}
