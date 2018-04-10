import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-seu-restaurante',
  templateUrl: './seu-restaurante.component.html',
  styleUrls: ['./seu-restaurante.component.css']
})
export class SeuRestauranteComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
