import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Validator } from '@angular/forms';
import { emailPattern, nombreApellidopattern, noPuedeSerStrider } from 'src/app/shared/validator/validator';
import { ValidatorService } from '../../shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.valServ.nombreApellidopattern)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.valServ.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, noPuedeSerStrider, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.valServ.camposIguales('password', 'password2')]
  })


  campoNoValido(campo: string) {
    console.log(campo);
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }
  /* 
    emailRequired() {
      return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched
    }
  
    emailFormato() {
      return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched
    }
  
    emailTomado() {
      return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched
    } */

  mensajeError: string = 'A';

  emailComprobar() {
    if (this.miFormulario.get('email')?.touched) {
      if (this.miFormulario.get('email')?.errors?.required) {
        return 'El correo es obligatorio';
      } else if (this.miFormulario.get('email')?.errors?.pattern) {
        return 'El formato de correo es erróneo';
      } else if (this.miFormulario.get('email')?.errors?.emailTomado) {
        return 'Ese email ya se encuentra ocupado';
      }
    }
    return '';
  }

  constructor(private fb: FormBuilder, private valServ: ValidatorService, private emailValidator: EmailValidatorService) {

    this.miFormulario.controls
  }

  submitFormulario() {
    console.log(this.miFormulario);
    this.miFormulario
  }


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Daniel Soria',
      email: 'test1@test.com',
      username: 'logan31',
      password: '123456',
      password2: '123456',
    })
  }

}
