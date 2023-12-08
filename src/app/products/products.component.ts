import { Component, OnInit } from '@angular/core';
import {ProductService} from './../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  products: any[] = [];

  constructor(private ProductService:ProductService, private router: Router) {}

  ngOnInit() {
    this.ProductService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
