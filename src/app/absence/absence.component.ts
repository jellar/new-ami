import { Component } from '@angular/core';

@Component({
  template: `
  <div class="">
    <router-outlet></router-outlet>
  </div>
  `
})

export class AbsenceComponent {
  constructor() {
    console.log('Absence component')
  }
}
