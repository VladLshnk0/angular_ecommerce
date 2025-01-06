import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <header>
      <button routerLink="/">
        {{ title() }}
      </button>
      <app-primary-button
        [label]="buttonLabel() + ' (' + cartService.cart().length + ')'"
        routerLink="/cart"
        />
    </header>
  `,
  styles: `
    header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #F1F5F9;
      color: black;
      padding: 12px 16px;
      box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    button{
      font-size: 20px;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  `,
})
export class HeaderComponent {
  title = signal<string>('My e-commerce App');
  buttonLabel = signal<string>('Cart');

  cartService = inject(CartService);

  cartButtonClicked() {
    console.log('clicked');
  }
}
