import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectItem} from 'primeng/components/common/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seu-nome',
  templateUrl: './seu-nome.component.html',
  styleUrls: ['./seu-nome.component.css'],
  providers: [MessageService],

})
export class SeuNomeComponent implements OnInit {

  public service: TarefaService;
  nome:string;

  anterior:string

  msgs: Message[] = [];



  constructor(private router: Router,private messageService: MessageService,_service: TarefaService) {
      this.service = _service;

      this.nome = _service.nome;
  }

  liberar(){
    if(this.service.nome != null && this.service.nome != ""){

      this.router.navigate(['/pergunta/seu-email']);

    }else{
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Campo vazio', detail:'Você deve preencher o nome'});
    }   
  }



  ngOnInit() {
    if(this.service.modalidade =="igreja" && this.service.igrejaInstrucao =="evangélica" ){
      this.anterior ="sua-igreja";
    }else if(this.service.modalidade =="igreja" && this.service.igrejaInstrucao =="católica" ){
      this.anterior ="sua-igreja";
    }else if(this.service.modalidade =="igreja" && this.service.igrejaInstrucao =="outro" ){
      this.anterior ="outro-sua-ideia";
    }else if(this.service.modalidade =="restaurante"){
      this.anterior ="seu-restaurante";
    }else{
      this.anterior ="sua-empresa";
    }
  }

}
