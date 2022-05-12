import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';
import { AuthService } from 'src/app/service/auth-service';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;


  constructor(

    private fb: FormBuilder,
    private restService: RestService,
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
        "Password":this.formData.value.password
      }

     this.authService.loginRequest(dataToSend).then( response => {
        console.log(response)
        this.authService.perfil = response as Perfil
    
      }).catch( error => {
        console.log(error)
      })
    }
  }

}
