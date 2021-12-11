import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { genero } from '../../../../../01 -bases/src/app/padel/enums/padel.enum';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, [Validators.requiredTrue]]

  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  guardar() {
    this.persona = {
      genero: this.miFormulario.controls.genero.value,
      notificaciones: this.miFormulario.controls.notificaciones.value
      /* genero: this.miFormulario.value.genero,
      notificaciones: this.miFormulario.value.notificaciones */
    }
    /* const formValue = {this.miFormulario.value}
   delete formValue.condiciones;
   this.persona=formValue; */
    console.log(this.persona);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.setValue(this.persona);
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });


    /*     this.miFormulario.valueChanges.subscribe(form => {
          delete form.condiciones;
          this.persona = form;
        }) */

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      this.persona = rest;
    })
  }



}
