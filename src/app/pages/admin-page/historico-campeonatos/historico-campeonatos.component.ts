import { Component, OnInit } from '@angular/core';
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
    private campeonatoService: CampeonatoService
  ) { }

  async ngOnInit() {
    this.campeonatos = await this.campeonatoService.getAllButCurrent();
  }

}
