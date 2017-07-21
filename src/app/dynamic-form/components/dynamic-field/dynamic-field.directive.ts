

import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormLabelComponent } from '../form-label/form-label.component';
import { FormInputComponent } from './../form-input/form-input.component';
import { FormSelectComponent } from './../form-select/form-select.component';
import { FormButtonComponent } from './../form-button/form-button.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  header: FormHeaderComponent,
  label: FormLabelComponent,
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
}

@Directive({
  selector: '[dynamicField]'
})

export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
     private resolver: ComponentFactoryResolver,
     private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
         Supported types: ${supportedTypes}
        `
      )
    }

    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<Field>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
