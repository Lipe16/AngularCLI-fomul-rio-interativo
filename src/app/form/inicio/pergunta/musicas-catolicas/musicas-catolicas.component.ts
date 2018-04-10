import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-musicas-catolicas',
  templateUrl: './musicas-catolicas.component.html',
  styleUrls: ['./musicas-catolicas.component.css']
})
export class MusicasCatolicasComponent implements OnInit {


  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
