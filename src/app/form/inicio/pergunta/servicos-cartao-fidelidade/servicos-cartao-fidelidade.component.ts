import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-servicos-cartao-fidelidade',
  templateUrl: './servicos-cartao-fidelidade.component.html',
  styleUrls: ['./servicos-cartao-fidelidade.component.css']
})
export class ServicosCartaoFidelidadeComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
