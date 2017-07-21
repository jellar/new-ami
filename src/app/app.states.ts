import { SlidesComponent } from './slides/slides.component';
import {HelloComponent, AboutComponent} from './hello-world';
import {Transition} from '@uirouter/angular';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SlidesTestComponent } from './slides/slides-test/slides-test.component';

/** States */
export const helloState = { name: 'hello', url: '/hello',  component: HelloComponent };

export const aboutState = { name: 'about', url: '/about',  component: AboutComponent };

export const loginState = { name: 'login', url: '/login', component: LoginComponent}
export const slidesState = {
  name: 'slides',
  url: '/slides',
  component: SlidesComponent,
  data: { requiresAuth: true}
}

export const slidesTestState = {
  name: 'slides-test',
  url: '/slides-test',
  component: SlidesTestComponent,
  data: { requiresAuth: true}
}

