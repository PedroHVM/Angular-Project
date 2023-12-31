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
  isFilterDropdownOpen: boolean = false; 
  pagedProducts: any[] = [];
  p: number = 1;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filterProducts('');
    });
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  filterProducts(category: string) {
    this.selectedCategory = category;
  
    if (category === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
    this.pagedProducts = [...this.filteredProducts];
    this.p = 1;
  
    console.log('Current page:', this.p);
  }
  

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  
}
