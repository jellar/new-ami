import { Http } from '@angular/http';
import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form.component';

@Component({
  templateUrl: './slide.html'
})

export class SlidesComponent implements OnInit {

  formFields = [];

  constructor(private http: Http) {}
  ngOnInit() {
    this.http.get('http://localhost:56702/api/fakeslide/1')
        .subscribe(response => {
          console.log(response.json())
          this.formFields = response.json()
        })
  }

  submit() {
     this.http.get('http://localhost:56702/api/fakeslide/2')
        .subscribe(response => {
          console.log(response.json())
          this.formFields = response.json()
        })
  }
}
