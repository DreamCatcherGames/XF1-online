import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CustomValidatorsService } from 'src/app/service/custom-validators.service';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroService
  ) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      {
        email: ['', Validators.required], 
        username: ['', Validators.required],
        password : ['', Validators.required],
        firstname : [''],
        lastname : [''],
        country: [''],
        age: ['']
      }
    )
  }

  @Output() closeEvent = new EventEmitter();

  closeModal(){
    this.closeEvent.emit();
  }

  onSubmit(){
    if(this.formData.valid){
   
      this.registroService.createNewUser(
        {
          Username:this.formData.value.username,
          Country:this.formData.value.country,
          First_Name:this.formData.value.firstname,
          Last_Name:this.formData.value.lastname,
          Email:this.formData.value.email,
          Encrypted_Password:this.formData.value.password
        }
      ).then((response)=>{
        if (response.status != 200){
          throw response;
        }else{
          return response.text()
        }
      }).then((res)=>{
        Swal.fire(
          'Success!',
          'Please check your email, we have sent an email to verify your account.',
          'success'
        );
        this.closeModal();
      }).catch((err)=>{
        Swal.fire(
          'Error',
          'Ocurrio un error, por favor revise su formulario',
          'error'
        )
      })
    }
  }

  validateForm():boolean{
    return true;
  }

}
