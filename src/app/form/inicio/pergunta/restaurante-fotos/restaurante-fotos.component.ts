import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-restaurante-fotos',
  templateUrl: './restaurante-fotos.component.html',
  styleUrls: ['./restaurante-fotos.component.css']
})
export class RestauranteFotosComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
