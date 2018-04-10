import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-evangelica-agenda',
  templateUrl: './evangelica-agenda.component.html',
  styleUrls: ['./evangelica-agenda.component.css']
})
export class EvangelicaAgendaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
