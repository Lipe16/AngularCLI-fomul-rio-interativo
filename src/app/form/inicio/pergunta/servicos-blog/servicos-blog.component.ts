import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-servicos-blog',
  templateUrl: './servicos-blog.component.html',
  styleUrls: ['./servicos-blog.component.css']
})
export class ServicosBlogComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }


  ngOnInit() {
  }

}
