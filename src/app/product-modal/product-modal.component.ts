import { Component, Input, OnInit } from '@angular/core';
import { FashionProduct } from '../models/fashion-product';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [
    NgbModule,
FormsModule,
CommonModule

  ],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent implements OnInit {

  @Input() product!: FashionProduct;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    // Initialiser le formulaire avec les valeurs du produit si présent
    if (this.product) {

    }
  }

  save(): void {
    // Logique pour sauvegarder le produit (ajout ou modification)
    this.activeModal.close(this.product);
  }

}
