import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-evangelica-fotos',
  templateUrl: './evangelica-fotos.component.html',
  styleUrls: ['./evangelica-fotos.component.css']
})
export class EvangelicaFotosComponent implements OnInit {
  
  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
