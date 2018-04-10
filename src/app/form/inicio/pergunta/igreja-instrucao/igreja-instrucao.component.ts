import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-igreja-instrucao',
  templateUrl: './igreja-instrucao.component.html',
  styleUrls: ['./igreja-instrucao.component.css']
})
export class IgrejaInstrucaoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
