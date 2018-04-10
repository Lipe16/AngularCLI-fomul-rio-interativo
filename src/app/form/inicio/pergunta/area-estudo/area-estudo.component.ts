import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-area-estudo',
  templateUrl: './area-estudo.component.html',
  styleUrls: ['./area-estudo.component.css']
})
export class AreaEstudoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
