import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    precio: 0,
    existencias: 10
  }
  guardar() {
    this.miFormulario.resetForm({
      producto: '',
      precio: 0,
      existencias: 0
    });
    console.log(this.miFormulario);

  }

  nombreValido(): boolean {

    return this.miFormulario?.controls.producto.invalid &&
      this.miFormulario?.controls.producto.touched &&
      this.miFormulario.value.producto != ''
  };

  precioValido(): boolean {
    /*     this.miFormulario?.controls.precio.setErrors({ 'precio': true });
        this.miFormulario?.controls.precio.getError('precio'); */
    return this.miFormulario?.value.precio < 0
  }

  /*   guardar(miFormulario: NgForm) {
      console.log(miFormulario);
    } */

}
