import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div class="item">
      <img [src]="product().image" />
      <div class="infoAndActions">
        <div class="info">
          <h3>{{ product().title }}</h3>
          <p>{{ product().price + '$' }}</p>
        </div>
        <div class="productActions">
          <button (click)="cartService.removeFromCart(product())">X</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .item{
      display: flex;
      flex-direction: row;
      gap: 16px;
      height: 196px;
      width: 100%;
    }

    .item img{
      width: 200px;
      height: 196px;
    }

    .infoAndActions{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .info{
      display: flex;
      flex-direction: column;
    }

    .productActions{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .productActions{
      margin-bottom: 16px;

    }
  `,
})
export class CartItemComponent {
  product = input.required<Product>();

  cartService = inject(CartService);
}
