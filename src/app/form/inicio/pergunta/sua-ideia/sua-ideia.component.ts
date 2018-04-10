import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-sua-ideia',
  templateUrl: './sua-ideia.component.html',
  styleUrls: ['./sua-ideia.component.css']
})
export class SuaIdeiaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  anterior:string
  proximo:string

  ngOnInit() {
    if(this.service.modalidade =="ideia"){
      this.anterior ="ideia-instrucao";
      this.proximo = "seu-nome";
    }else{
      this.anterior ="noticias";
      this.proximo="sua-empresa";
    }
  }

}
