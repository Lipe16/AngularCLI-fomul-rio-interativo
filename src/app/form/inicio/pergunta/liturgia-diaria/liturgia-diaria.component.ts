import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-liturgia-diaria',
  templateUrl: './liturgia-diaria.component.html',
  styleUrls: ['./liturgia-diaria.component.css']
})
export class LiturgiaDiariaComponent implements OnInit {


  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
