import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <main>
      <app-header />

      <router-outlet />
    </main>
  `,
  styles: `
    main{
      width: 100%;
      length: 100%;
    }

    router-outlet{
      padding: 32px;
    }
  `,
})
export class AppComponent {
  title = 'angular_e-commerce';
}
