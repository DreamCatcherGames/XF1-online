import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/service/error.service';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent implements OnInit {

  token:string='';

  constructor(
    private restService: RestService,
    private activatedRoute: ActivatedRoute, 
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Verifying your user',
      allowOutsideClick: false
    });
    this.errorService.showLoading();
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.restService.post('Player/verificationRequest', JSON.stringify({Token:this.token})).then(res=>{
      if(res.status == 200){
        return res.text();
      }else{
        throw res;
      }
    }).then(res=>{
      Swal.fire('Success!', 'You can close this window and login to the platform');
    }).catch(err=>{
      this.errorService.handle(err);
    });

//    this.restService.post()

  }

}
