import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
