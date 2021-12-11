import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Warcraft'], // No son arreglos, son colecciones de formControl
      ['Pokémon']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  };

  agregarFavoritos() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    const insertar = new FormControl(this.nuevoFavorito.value, this.nuevoFavorito.validator);
    this.favoritosArr.push(insertar);
    // this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, this.nuevoFavorito.validator));
    this.nuevoFavorito.reset;
  };

  eliminarFavorito(num: number) {
    this.favoritosArr.removeAt(num);
  };

  campoNoValido(campo: string) {
    this.miFormulario.controls.favoritos.value;

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

  ngOnInit(): void {
    /*    this.miFormulario.reset({
         nombre: 'Daniel'
       }) */
  }

}
