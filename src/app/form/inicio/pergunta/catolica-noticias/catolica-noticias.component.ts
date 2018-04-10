import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-catolica-noticias',
  templateUrl: './catolica-noticias.component.html',
  styleUrls: ['./catolica-noticias.component.css']
})
export class CatolicaNoticiasComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
