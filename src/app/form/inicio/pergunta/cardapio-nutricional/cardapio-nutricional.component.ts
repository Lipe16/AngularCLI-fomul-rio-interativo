import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-cardapio-nutricional',
  templateUrl: './cardapio-nutricional.component.html',
  styleUrls: ['./cardapio-nutricional.component.css']
})
export class CardapioNutricionalComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  ngOnInit() {
  }

}
