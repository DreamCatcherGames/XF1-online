import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService, 
    private errorService:ErrorService
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
    this.errorService.showLoading();
    if(this.formData.valid){
      const dataToSend = {
        "Username":this.formData.value.email,
        "Encrypted_Password":this.formData.value.password
      }
     this.authService.loginRequest(dataToSend).then( response => {
       console.log(response)
        if(response.status == 200){
          return response.json();
        }else{
          throw response;
        }
      }).then(res=>{
        this.authService.setPerfil(res as Perfil);
        this.router.navigateByUrl('/admin/campeonato-actual')
        this.errorService.hideLoading();
      }).catch( error => {
        this.errorService.handle(error);
      })
    }
  }

}
