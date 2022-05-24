import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent implements OnInit {

  token:string;

  constructor(
    private restService: RestService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Verifying your user',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);

//    this.restService.post()

  }

}
