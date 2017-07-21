import { Component, Input } from '@angular/core';

@Component({
  template: `
  <div class="">
    <router-outlet></router-outlet>
  </div>
  `
})

export class MainComponent {
  constructor() {
    console.log('main componet')
  }
}
