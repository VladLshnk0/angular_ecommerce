import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <main class="list">
      @for (product of products(); track product.id) {
      <app-product-card class="productCard" [product]="product" />
      }
    </main>
  `,
  styles: `
    main{
      display: grid;
      padding: 32px;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
    }

    @media (min-width: 816px) {
    main{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
}
  `,
})
export class ProductsListComponent {
  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
    const data = await res;

    this.products.set(data);
  }

  products = signal<Product[]>([]);
}
