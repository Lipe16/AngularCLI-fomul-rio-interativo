import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-musicas-gospel',
  templateUrl: './musicas-gospel.component.html',
  styleUrls: ['./musicas-gospel.component.css']
})
export class MusicasGospelComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
