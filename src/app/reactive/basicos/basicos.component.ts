import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*   miFormulario: FormGroup = new FormGroup({
      producto: new FormControl('Producto Ejemplo'),
      precio: new FormControl('0'),
      existencias: new FormControl('5'),
    }); */

  miFormulario: FormGroup = this.formBuilder.group({
    producto: ['', [Validators.required, Validators.minLength(3)]],
    precio: ['', [Validators.required, Validators.min(0)]],
    existencias: ['', [Validators.required, Validators.min(0)]],
  });

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      producto: "Casa",
      precio: 99999,
      existencias: 1234
    })
  }


}
