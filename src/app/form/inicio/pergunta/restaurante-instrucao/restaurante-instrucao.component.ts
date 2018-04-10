import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-restaurante-instrucao',
  templateUrl: './restaurante-instrucao.component.html',
  styleUrls: ['./restaurante-instrucao.component.css']
})
export class RestauranteInstrucaoComponent implements OnInit {
  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
