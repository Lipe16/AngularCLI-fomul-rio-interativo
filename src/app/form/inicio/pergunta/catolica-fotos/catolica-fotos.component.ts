import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-catolica-fotos',
  templateUrl: './catolica-fotos.component.html',
  styleUrls: ['./catolica-fotos.component.css']
})
export class CatolicaFotosComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
