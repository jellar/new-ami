
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-label',
  template: `
    <div
      class="form-group {{config.class}}">
      <label>{{ config.label }}</label>
    </div>
  `
})

export class FormLabelComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
