
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  template: `
    <div
      class="form-group"
      [formGroup]="group" >
      <label>{{ config.label }}</label>
      <input
        class="form-control"
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name"
        [value]="config.value" />
    </div>
  `
})

export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
