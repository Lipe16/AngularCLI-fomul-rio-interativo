import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-restaurante-contato',
  templateUrl: './restaurante-contato.component.html',
  styleUrls: ['./restaurante-contato.component.css']
})
export class RestauranteContatoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
