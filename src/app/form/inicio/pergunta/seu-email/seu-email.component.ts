import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';
import {Router} from "@angular/router";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-seu-email',
  templateUrl: './seu-email.component.html',
  styleUrls: ['./seu-email.component.css'],
  providers: [MessageService]
})
export class SeuEmailComponent implements OnInit {

  public service: TarefaService;
  email:string;


  msgs: Message[] = [];

  constructor(private router: Router,private messageService: MessageService,_service: TarefaService) {
      this.service = _service;

      this.email = _service.email;
  }

  liberar(){
    if(this.service.email != null && this.service.email != ""){

      this.router.navigate(['/pergunta/seu-telefone']);

    }else{
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Campo vazio', detail:'Você deve preencher o email'});
    }   
  }

  ngOnInit() {
  }

}
