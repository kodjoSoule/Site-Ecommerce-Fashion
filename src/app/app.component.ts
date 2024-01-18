import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FashionProductService } from './services/fashion-product.service';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FashionProductService],
  imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fashion-app';
  isAuthenticated = false;
  constructor() { }
  ngOnInit() {
  }
  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
getIsAuthenticated() {

  return this.isAuthenticated;
}

}
