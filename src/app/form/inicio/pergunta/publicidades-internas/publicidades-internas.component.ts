import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-publicidades-internas',
  templateUrl: './publicidades-internas.component.html',
  styleUrls: ['./publicidades-internas.component.css']
})
export class PublicidadesInternasComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  
  }

  ngOnInit() {
  }

}
