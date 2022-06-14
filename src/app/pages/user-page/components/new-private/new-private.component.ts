import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { ErrorService } from 'src/app/service/error.service';
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

  closeModal(created:boolean){
    this.closeEvent.emit(created);
  }

  onSubmit(){
    if(this.leagueName!=''){
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
          Swal.fire('success','The league has been created successfully','success').then(()=>{
            this.closeModal(true);
          });
        }).catch(err=>{
          this.errorService.handle(err);
        })
    }
  }

  validateForm():boolean{
    return true;
  }

}
