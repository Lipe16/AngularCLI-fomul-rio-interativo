import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-catolica-agenda',
  templateUrl: './catolica-agenda.component.html',
  styleUrls: ['./catolica-agenda.component.css']
})
export class CatolicaAgendaComponent implements OnInit {
  
  public service: TarefaService;

  constructor(_service: TarefaService) {
    this.service = _service;
}

  ngOnInit() {
  }

}
