import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productId: number | undefined;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productIdParam = params.get('id');
      if (productIdParam !== null) {
        this.productId = +productIdParam;
        this.ProductService.getProductById(this.productId).subscribe((product) => {
          this.product = product;
        });
      }
    });
  }
}
