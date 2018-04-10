import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-evangelica-noticias',
  templateUrl: './evangelica-noticias.component.html',
  styleUrls: ['./evangelica-noticias.component.css']
})
export class EvangelicaNoticiasComponent implements OnInit {
  
  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
