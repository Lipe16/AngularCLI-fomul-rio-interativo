import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-pastorais',
  templateUrl: './pastorais.component.html',
  styleUrls: ['./pastorais.component.css']
})
export class PastoraisComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
