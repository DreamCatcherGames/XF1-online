import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato';
import { CampeonatoService } from 'src/app/service/campeonato.service';

@Component({
  selector: 'app-historico-campeonatos',
  templateUrl: './historico-campeonatos.component.html',
  styleUrls: ['./historico-campeonatos.component.scss']
})
export class HistoricoCampeonatosComponent implements OnInit {

  campeonatos: Campeonato[];

  constructor(
    private campeonatoService: CampeonatoService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.campeonatos = await this.campeonatoService.getAllButCurrent();
  }


  goToInicial(){
    this.router.navigateByUrl('/admin')
  }

}
