import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-instrucao',
  templateUrl: './instrucao.component.html',
  styleUrls: ['./instrucao.component.css']
})
export class InstrucaoComponent implements OnInit {

  public service: TarefaService;
  modalidade:string;

  constructor(_service: TarefaService) {
      this.service = _service;

      this.modalidade = _service.modalidade;
  }
  ngOnInit() {
  }

}
