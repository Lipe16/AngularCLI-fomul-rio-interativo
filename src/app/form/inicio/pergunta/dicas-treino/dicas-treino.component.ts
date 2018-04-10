import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-dicas-treino',
  templateUrl: './dicas-treino.component.html',
  styleUrls: ['./dicas-treino.component.css']
})
export class DicasTreinoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
