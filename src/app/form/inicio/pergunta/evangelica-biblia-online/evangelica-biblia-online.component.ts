import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-evangelica-biblia-online',
  templateUrl: './evangelica-biblia-online.component.html',
  styleUrls: ['./evangelica-biblia-online.component.css']
})
export class EvangelicaBibliaOnlineComponent implements OnInit {

  
  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
