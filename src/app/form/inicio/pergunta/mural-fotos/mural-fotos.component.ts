import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-mural-fotos',
  templateUrl: './mural-fotos.component.html',
  styleUrls: ['./mural-fotos.component.css']
})
export class MuralFotosComponent implements OnInit {
  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
