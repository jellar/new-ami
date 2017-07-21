import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AbsenceComponent } from './absence.component';
import { AbsenceIdentificationComponent } from './absence-identification/absence-identification.component';
import { AbsenceSelctionComponent } from './absence-selection/absence-selection.component';
import { AbsenceOpenComponent } from './absence-open/absence-open.component';
import { AbsenceUpdateComponent } from './absence-update/absence-update.component';
import { AbsenceCloseComponent } from './absence-close/absence-close.component';

export const absenceRoutings = RouterModule.forChild([
  {
    path: 'absence',
    component: AbsenceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'identification',
        component: AbsenceIdentificationComponent
      },
      {
        path: 'selection',
        component: AbsenceSelctionComponent
      },
      {
        path: 'open-absence',
        component: AbsenceOpenComponent
      },
      {
        path: 'update-absence',
        component: AbsenceUpdateComponent
      },
      {
        path: 'close-absence',
        component: AbsenceCloseComponent
      }
    ]
  }
]);
