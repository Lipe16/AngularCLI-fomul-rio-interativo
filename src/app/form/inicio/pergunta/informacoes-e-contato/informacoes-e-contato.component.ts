import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-informacoes-e-contato',
  templateUrl: './informacoes-e-contato.component.html',
  styleUrls: ['./informacoes-e-contato.component.css']
})
export class InformacoesEContatoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
