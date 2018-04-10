import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-rever-informacoes',
  templateUrl: './rever-informacoes.component.html',
  styleUrls: ['./rever-informacoes.component.css']
})
export class ReverInformacoesComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  public informacoes


  ngOnInit() {
    this.informacoes =  this.service.criarJson();
  }

}
