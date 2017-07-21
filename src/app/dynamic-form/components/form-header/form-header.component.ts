
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-label',
  template: `
    <h3
      class="{{config.class}}">
      {{ config.label }}
    </h3>
  `
})

export class FormHeaderComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
