import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;
  isShowingNuevoRegistroModal:boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService
  ) {
   }

  ngOnInit(): void {

    this.formData = this.fb.group(
      {
        email: ['', [Validators.required]],
        password: ['', Validators.required]
      }
    )

  }

  onSubmit() {
    if(this.formData.valid){
      const dataToSend = {
        "Username":this.formData.value.email,
        "Encrypted_Password":this.formData.value.password
      }
     this.authService.loginRequestUser(dataToSend).then( response => {
        this.authService.perfilUsuario = response as PerfilUsuario;
        this.router.navigateByUrl('/admin')
      }).catch( error => {
        console.log(error);
        Swal.fire({title:'Error', text:error, icon:'error'})
      })
    }
  }

  closeNuevoRegistroModal():void{
    this.isShowingNuevoRegistroModal = false;
  }


}
