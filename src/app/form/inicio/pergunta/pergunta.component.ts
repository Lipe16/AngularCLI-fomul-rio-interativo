import { Component, OnInit, Input } from '@angular/core';
import {Pergunta} from './pergunta.model';
import { TarefaService } from '../../../tarefa.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {


  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
    
  }

}
