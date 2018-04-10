import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-seu-telefone',
  templateUrl: './seu-telefone.component.html',
  styleUrls: ['./seu-telefone.component.css'],
  providers : [TarefaService] 
})
export class SeuTelefoneComponent implements OnInit {

  public service: TarefaService;
  telefone:string;

  postData :  string;


  constructor(_service: TarefaService) {
      this.service = _service;
      this.telefone = _service.telefone;
  }




  ngOnInit() {
  }

}
