import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-dashboard-facil',
  templateUrl: './dashboard-facil.component.html',
  styleUrls: ['./dashboard-facil.component.css']
})
export class DashboardFacilComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
