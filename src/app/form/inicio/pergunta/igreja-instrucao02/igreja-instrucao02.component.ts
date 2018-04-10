import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-igreja-instrucao02',
  templateUrl: './igreja-instrucao02.component.html',
  styleUrls: ['./igreja-instrucao02.component.css']
})
export class IgrejaInstrucao02Component implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  proximaPagina:string

  ngOnInit() {
    if(this.service.igrejaInstrucao == "evangélica"){
      this.proximaPagina ="evangelica-fotos"
    }else if(this.service.igrejaInstrucao == "católica"){
      this.proximaPagina ="musicas-catolicas"
    }else{
      this.proximaPagina ="outro-sua-ideia"
    }
  }

}
