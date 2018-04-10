import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-cartao-fidelidade',
  templateUrl: './cartao-fidelidade.component.html',
  styleUrls: ['./cartao-fidelidade.component.css']
})
export class CartaoFidelidadeComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
