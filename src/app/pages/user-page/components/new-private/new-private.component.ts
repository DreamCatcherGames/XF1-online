import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as countries from 'country-data';
import { AuthService } from 'src/app/service/auth.service';
import { ErrorService } from 'src/app/service/error.service';
import { RegistroService } from 'src/app/service/registro.service';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-private',
  templateUrl: './new-private.component.html',
  styleUrls: ['./new-private.component.scss']
})
export class NewPrivateComponent implements OnInit {

  leagueName:string='';

  constructor(
    private errorService: ErrorService, 
    private restService: RestService, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  @Output() closeEvent = new EventEmitter();

  closeModal(){
    this.closeEvent.emit();
  }

  onSubmit(){
    Swal.fire('Loading', 'Uploading your league, please wait')
    Swal.showLoading();
    this.restService.post('/League/createPrivateLeague/'+this.authService.perfilUsuario.Token+'/'+this.authService.perfilUsuario.Salt,
      JSON.stringify({
        'Name':this.leagueName
      })).then(res => {
        if(res.status == 200){
          return res.text();
        }else{
          throw res;
        }
      }).then(res=>{
        Swal.fire('success','The league has been created successfully','success');
      }).catch(err=>{
        this.errorService.handle(err);
      })
    if(this.leagueName!=''){
      this.closeModal();
    }
  }

  validateForm():boolean{
    return true;
  }

}
