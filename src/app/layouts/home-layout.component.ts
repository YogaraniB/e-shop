import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent {}