import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <main>
      <div class="mainContent">
        <h2>Your cart</h2>
        <div class="cartItemsList">
          @for (item of cartService.cart(); track item.id) {
          <app-cart-item [product]="item" />
          }
        </div>
      </div>
    </main>
  `,
  styles: `
    main{
        display: flex;
        justify-content: center;
        padding-left: 32px;
      }

      .cartItemsList{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 1040px;
      }
  `,
})
export class CartComponent {
  cartService = inject(CartService);
}
