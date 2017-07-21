
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { LinksComponent } from './useful-links/links.component';
import { SlidesComponent } from './slides/slides.component';
import { SlidesTestComponent } from './slides/slides-test/slides-test.component';

import { AuthGuard } from './auth/auth.guard';

export const routing = RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'main/select-client',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'service-overview',
    component: ServiceOverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callbacks',
    component: CallbacksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'slides',
    component: SlidesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'slides-test',
    component: SlidesTestComponent,
    canActivate: [AuthGuard]
  }
])
