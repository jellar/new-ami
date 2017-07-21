import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form.component';

@Component({
  templateUrl: './slide-test.html'
})

export class SlidesTestComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('http://localhost:56702/api/fakeslidetest/1')
        .subscribe(response => {
          console.log(response.json())
           this.config = response.json()
        })
  }

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
