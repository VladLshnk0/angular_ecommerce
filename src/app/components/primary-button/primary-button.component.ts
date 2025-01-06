import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="buttonClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: `
  button{
    padding: 8px 20px;
    background: #3B82F6;
    color: #f1f1f1;
    width: 100%;
    border-width: 2px;
    border-radius: 8px;
    border-color: #1E40AF;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    font-size: 16px;
    font-weight: 600;
  }

  button:hover{
    opacity: 0.9;
    cursor: pointer;
  }
  `,
})
export class PrimaryButtonComponent {
  label = input('');

  buttonClicked = output();
}
