import { AbsenceComponent } from './absence.component';
import { AbsenceSelctionComponent } from './absence-selection/absence-selection.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { absenceRoutings } from './absence-routing';
import { AbsenceIdentificationComponent } from './absence-identification/absence-identification.component';
import { AbsenceOpenComponent } from './absence-open/absence-open.component';
import { AbsenceUpdateComponent } from './absence-update/absence-update.component';
import { AbsenceCloseComponent } from './absence-close/absence-close.component';

const initialComponents = [
                          AbsenceComponent,
                          AbsenceIdentificationComponent,
                          AbsenceSelctionComponent,
                          AbsenceOpenComponent,
                          AbsenceUpdateComponent,
                          AbsenceCloseComponent,
                          ]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    absenceRoutings
  ],
  declarations: [
    initialComponents
  ],
  providers: [
  ]
})
export class AbsenceModule { }
