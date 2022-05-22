import { Component, Input, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/models/campeonato';

import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.scss']
})
export class ListaCampeonatosComponent implements OnInit {

  @Input() listaCampeonatosJson: string;
  listaCampeonatos: Campeonato[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(){
    this.listaCampeonatos = JSON.parse(this.listaCampeonatosJson);
  }

  goToCampeonato(campeonato){
    this.router.navigateByUrl('/admin/campeonato/'+campeonato.id);
  }

}
