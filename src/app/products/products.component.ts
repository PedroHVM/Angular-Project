import { Component, OnInit } from '@angular/core';
import { ProductService } from './../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filterProducts(''); // Carrega todos os produtos inicialmente
    });
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  filterProducts(category: string) {
    this.selectedCategory = category;

    if (category === '') {
      this.filteredProducts = [...this.products]; // Mostra todos os produtos se a categoria for vazia
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
