import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-dizimo-digital',
  templateUrl: './dizimo-digital.component.html',
  styleUrls: ['./dizimo-digital.component.css']
})
export class DizimoDigitalComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  anterior:string;
  proximo:string;

  ngOnInit() {
    if(this.service.igrejaInstrucao == "evangélica"){
      this.anterior = "evangelica-testemunhos";
      this.proximo = "sua-igreja";
    }else if(this.service.igrejaInstrucao == "católica"){
      this.anterior = "santo-do-dia";
      this.proximo = "liturgia-diaria";
    }
  }


}
