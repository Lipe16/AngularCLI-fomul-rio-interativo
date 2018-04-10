import { Component, Input } from '@angular/core';
import { Pergunta } from './form/inicio/pergunta/pergunta.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

public  informacoes: Pergunta;
  
  

  addBlog(event){
    console.log(event);
  }

  
}
