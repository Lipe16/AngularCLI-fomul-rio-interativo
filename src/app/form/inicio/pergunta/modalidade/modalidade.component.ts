import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css']
})
export class ModalidadeComponent implements OnInit {

  public service: TarefaService;
  modalidade:string;

  router:Router;

  constructor(_service: TarefaService) {
      this.service = _service;

      this.modalidade = _service.modalidade;
  }

  

  ngOnInit() {
  }

}
