import { Component, OnInit } from '@angular/core';

import {Pergunta} from '../pergunta.model';
import { TarefaService } from '../../../../tarefa.service';
import { TargetLocator } from 'selenium-webdriver';
import {NgClass} from '@angular/common';

import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],

})
export class BlogComponent implements OnInit {

  public service: TarefaService;

 // router:Router;

  constructor(private router: Router,_service: TarefaService) {
      this.service = _service;
  }

  proximaPagina(){
    this.service.addBlog("sim");
    this.router.navigate(['/pergunta/contato']);
  }

  ngOnInit() {
  }

}
