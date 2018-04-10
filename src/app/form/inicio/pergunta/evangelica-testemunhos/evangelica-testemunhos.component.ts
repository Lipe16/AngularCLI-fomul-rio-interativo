import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-evangelica-testemunhos',
  templateUrl: './evangelica-testemunhos.component.html',
  styleUrls: ['./evangelica-testemunhos.component.css']
})
export class EvangelicaTestemunhosComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
