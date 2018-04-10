import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../../tarefa.service';

@Component({
  selector: 'app-restaurante-blog',
  templateUrl: './restaurante-blog.component.html',
  styleUrls: ['./restaurante-blog.component.css']
})
export class RestauranteBlogComponent implements OnInit {

  public service: TarefaService;

  constructor(_service: TarefaService) {
      this.service = _service;
  }

  ngOnInit() {
  }

}
