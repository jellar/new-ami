import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './containers/dynamic-form.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormLabelComponent } from './components/form-label/form-label.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

const formComponents = [
    FormHeaderComponent,
    FormLabelComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    formComponents
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    formComponents
  ]
})

export class DynamicFormModule {}
