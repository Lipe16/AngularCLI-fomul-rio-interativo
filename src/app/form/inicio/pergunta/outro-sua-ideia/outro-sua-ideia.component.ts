import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-outro-sua-ideia',
  templateUrl: './outro-sua-ideia.component.html',
  styleUrls: ['./outro-sua-ideia.component.css']
})
export class OutroSuaIdeiaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  
  }

  ngOnInit() {
  }

}
