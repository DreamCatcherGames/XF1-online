import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';
import { ErrorService } from 'src/app/service/error.service';

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
    public authService: AuthService,
    private errorService: ErrorService
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
      this.errorService.showLoading();
      const dataToSend = {
        "Username":this.formData.value.email,
        "Encrypted_Password":this.formData.value.password
      }
     this.authService.loginRequestUser(dataToSend).then( response => {
        if(response.status == 200){
          return response.json();
        }else{
          throw response;
        }
      }).then(response=>{
        this.authService.perfilUsuario = response as PerfilUsuario;
        console.log(this.authService.perfilUsuario);
        this.router.navigateByUrl('/user/equipo')
        Swal.close();
      }).catch( error => {
        this.errorService.handle(error);
      })
    }
  }

  closeNuevoRegistroModal():void{
    this.isShowingNuevoRegistroModal = false;
  }


}
