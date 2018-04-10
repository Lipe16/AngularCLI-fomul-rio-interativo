import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  onPost() {
    this.service.postJSON()
    .subscribe(
       //data => this.postData = JSON.stringify(data),//aqui iria o data post
       () => console.log("acesso a webapi post ok...")
    );
  }


  ngOnInit() {
    this.onPost();
  }

}
