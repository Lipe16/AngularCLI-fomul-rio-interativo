import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-dicas-saude',
  templateUrl: './dicas-saude.component.html',
  styleUrls: ['./dicas-saude.component.css']
})
export class DicasSaudeComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
