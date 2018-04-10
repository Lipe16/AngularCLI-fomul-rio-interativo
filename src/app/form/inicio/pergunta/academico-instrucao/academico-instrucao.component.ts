import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-academico-instrucao',
  templateUrl: './academico-instrucao.component.html',
  styleUrls: ['./academico-instrucao.component.css']
})
export class AcademicoInstrucaoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
