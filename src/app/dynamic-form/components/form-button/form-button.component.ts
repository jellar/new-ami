import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-button',
  template: `
    <div
      class="card-action"
      [formGroup]="group">
      <button class="btn btn-primary {{config.class}}"
        [disabled]="config.disabled"
        type="submit">
        {{config.label}}
      </button>
    </div>
  `
})

export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
