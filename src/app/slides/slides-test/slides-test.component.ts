import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form.component';

@Component({
  templateUrl: './slide-test.html'
})

export class SlidesTestComponent implements  AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config = [
    {
      type: 'select',
      label: 'Select a Company',
      name: 'company',
      options: ['A1 Housing', 'AMRI LTD (Albany Molecular Research)', 'Anglian Water Services Ltd', 'Aon Corporation'],
      placeholder: 'Select an option',
      validation: [Validators.required],
      value: 'Aon Corporation'
    },
    {
      type: 'input',
      label: 'Surname',
      name: 'surname',
      value: '',
      placeholder: 'Enter your surname',
      validation: [Validators.required, Validators.minLength(3)]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);

  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
