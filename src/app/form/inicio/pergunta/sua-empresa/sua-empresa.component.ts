import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';


@Component({
  selector: 'app-sua-empresa',
  templateUrl: './sua-empresa.component.html',
  styleUrls: ['./sua-empresa.component.css']
})
export class SuaEmpresaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  }

  modalidade:string;
  rota:string;



  ngOnInit() {
    this.modalidade = this.service.modalidade;

    if(this.modalidade == "escola"){
      this.rota = 'sua-ideia';
    }else if(this.modalidade == "servicos"){
      this.rota = 'dash-board';
    }else{
      this.rota = 'fotos';
    }
  }

}
