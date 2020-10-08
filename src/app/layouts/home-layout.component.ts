import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-login></app-login>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent {}