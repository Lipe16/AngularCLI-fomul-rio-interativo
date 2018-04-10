import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-reserva-mesas',
  templateUrl: './reserva-mesas.component.html',
  styleUrls: ['./reserva-mesas.component.css']
})
export class ReservaMesasComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  
  }

  ngOnInit() {
  }

}
