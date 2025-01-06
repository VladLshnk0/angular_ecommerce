import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="productItem">
      <div class="productImageSection">
        <img [src]="product().image" />
      </div>
      <div class="productInfo">
        <div class="productDescription">
          <span class="productTitle">{{ product().title }}</span>
          <span class="productPrice">{{ '$' + product().price }}</span>
        </div>
        <app-primary-button class="addToCartButton" label="Add to cart" (buttonClicked)="cartService.addToCart(product())"/>
      </div>
      <span
        class="inStock"
        [class]="product().stock ? 'available' : 'outOfStock'"
      >
        @if (product().stock) {
        {{ product().stock }} left } @else { Out of stock }
      </span>
    </div>
  `,
  styles: `
  .productItem{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    min-height: 216px;
    border: 1px solid #F9FAFB;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 24px;
  }

  img{
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  .productImageSection{
    margin-left: auto;
    margin-right: auto;
  }

  .productInfo{
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 0;
    width: 100%;
  }

  .productDescription{
    display: flex;
    flex-direction: column;

  }

  .productTitle{
    font-size: 16px;
    font-weight: 700;
  }

  .productPrice{
    font-size: 16px;
    font-weight: 700;
  }

  .addToCartButton{
    margin: 12px 0 0 0;
  }

  .inStock{
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 12px;
    font-weight: 700;
  }

  .available{
    color:#4ADE80;
  }

  .outOfStock{
    color:#F87171;
  }
  `,
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);
}
