import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-santo-do-dia',
  templateUrl: './santo-do-dia.component.html',
  styleUrls: ['./santo-do-dia.component.css']
})
export class SantoDoDiaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  
  }

  ngOnInit() {
  }

}
