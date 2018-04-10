import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-publicidade-google',
  templateUrl: './publicidade-google.component.html',
  styleUrls: ['./publicidade-google.component.css']
})
export class PublicidadeGoogleComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;

  
  }

  anterior:string;
  proximo:string;

  ngOnInit() {
    if(this.service.igrejaInstrucao == "evangélica"){
      this.anterior = "evangelica-noticias";
      this.proximo = "evangelica-testemunhos";
    }else if(this.service.igrejaInstrucao == "católica"){
      this.anterior = "pastorais";
      this.proximo = "publicidades-internas";
  }

 
  }

}
