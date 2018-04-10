import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-sua-igreja',
  templateUrl: './sua-igreja.component.html',
  styleUrls: ['./sua-igreja.component.css']
})
export class SuaIgrejaComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  anterior:string;




  ngOnInit() {
    if(this.service.igrejaInstrucao == "evangélica"){
      this.anterior = "dizimo-digital";

    }else if(this.service.igrejaInstrucao == "católica"){
      this.anterior = "catolica-fotos";

    }
  }

}
