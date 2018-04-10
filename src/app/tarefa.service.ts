import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Headers, Http} from '@angular/http'
import { MusicasGospelComponent } from './form/inicio/pergunta/musicas-gospel/musicas-gospel.component';
import { InformacoesEContatoComponent } from './form/inicio/pergunta/informacoes-e-contato/informacoes-e-contato.component';


@Injectable()
export class TarefaService {

  modalidade: string
  instrucao: string
  blog: string
  contato: string
  dicasSaude: string
  dicasTreino: string
  fotos: string
  empresa: string
  nome: string
  email: string
  telefone: string
  
  areaEstudo:string
  cardapioNutricional: string
  eventos: string
  mensagens: string
  muralFotos: string
  noticias: string
  ideia: string
  igrejaInstrucao: string
  evangelicaFotos: string
  evangelicaBibliaOnline:string
  evangelicaAgenda:string
  musicasGospel:string
  evangelicaNoticias:string
  publicidadeGoogle:string
  evangelicaTestemunhos:string
  dizimoDigital:string
  suaIgreja:string
  musicasCatolicas:string
  noticiasCatolicas:string
  pastorais:string
  publicidadesInternas:string
  santoDoDia:string
  liturgiaDiaria:string
  catolicaAgenda:string
  formularios:string
  catolicaFotos:string
  outroSuaIdeia:string
  restauranteBlog:string
  cardapio:string
  cartaoFidelidade:string
  restauranteContato:string
  restauranteFotos:string
  geofence:string
  redesSociais:string
  reservaMesas:string
  seuRestaurante:string
  informacoesEContatos:string
  servicosBlog:string
  servicosCartaoFidelidade:string
  dashBoard:string
  


  constructor(private _http : Http) {
    this.inicializar();         
  }



//########################## METODOS ADD (SÃO SETERS PARA AS VARIAVEIS CONTIDAS AQUI)#######

//modalidade
public addModalidade(texto){
    console.log(texto);

    window.sessionStorage.setItem('modalidade', texto);
    this.inicializar(); 
  }

//instrucao
public addInstrucao(texto){
  console.log(texto);

  window.sessionStorage.setItem('instrucao', texto);
  this.inicializar(); 
}

//blog
  public addBlog(texto){
    console.log(texto);

    window.sessionStorage.setItem('blog', texto);
    this.inicializar(); 

  }

  //blog
  public addContato(texto){
    console.log(texto);

    window.sessionStorage.setItem('contato', texto);
    this.inicializar(); 
  }

  //saude
  public addDicasSaude(texto){
    console.log(texto);

    window.sessionStorage.setItem('dicas-saude', texto);
    this.inicializar(); 
  }

  //treino
  public addDicasTreino(texto){
      console.log(texto);
  
      window.sessionStorage.setItem('dicas-treino', texto);
      this.inicializar(); 
    }

  //fotos
  public addFotos(texto){
    console.log(texto);

    window.sessionStorage.setItem('fotos', texto);
    this.inicializar(); 
  }

  
  //empresa
  public addEmpresa(texto){
      console.log(texto);

    if(texto == null){
      texto = " "
    }

    window.sessionStorage.setItem('empresa', texto);
    this.inicializar(); 
  }


  //nome
  public addNome(texto){
    console.log(texto);

    if(texto == null){
      texto = " "
    }

    window.sessionStorage.setItem('nome', texto);
    this.inicializar(); 
  }

  //email
  public addEmail(texto){
      console.log(texto);
  
      if(texto == null){
        texto = " "
      }
  
      window.sessionStorage.setItem('email', texto);
      this.inicializar(); 
  }

    //telefone
    public addTelefone(texto){
      console.log(texto);
  
      if(texto == null){
        texto = " "
      }
  
      window.sessionStorage.setItem('telefone', texto);
      this.inicializar(); 
  }

      //area de estudo
      public addAreaEstudo(texto){
        console.log(texto);
  
        window.sessionStorage.setItem('area-estudo', texto);
        this.inicializar(); 
    }

    //area de estudo
    public addCardapioNutricional(texto){
        console.log(texto);
      
        window.sessionStorage.setItem('cardapio-nutricional', texto);
        this.inicializar(); 
    }

    //eventos
    public addEventos(texto){
      console.log(texto);
        
      window.sessionStorage.setItem('eventos', texto);
      this.inicializar(); 
    }

    //mensagens
    public addMensagens(texto){
      console.log(texto);
            
      window.sessionStorage.setItem('mensagens', texto);
      this.inicializar(); 
    }

    //mensagens
    public addMuralFotos(texto){
      console.log(texto);
                
      window.sessionStorage.setItem('mural-fotos', texto);
      this.inicializar(); 
    }

    //mensagens
    public addNoticias(texto){
      console.log(texto);
                
      window.sessionStorage.setItem('noticias', texto);
      this.inicializar(); 
    }
    //mensagens
    public addIdeia(texto){
      console.log(texto);
      if(texto == null){
        texto = " "
      }
      window.sessionStorage.setItem('ideia', texto);
      this.inicializar(); 
    }

    //Igreja-Instrucao
    public addIgrejaInstrucao(texto){
      console.log(texto);
      window.sessionStorage.setItem('igreja-instrucao', texto);

      this.inicializar(); 
    }

    //Igreja-Instrucao
    public addEvangelicaFotos(texto){
      console.log(texto);
      window.sessionStorage.setItem('evangelica-fotos', texto);
    
      this.inicializar(); 
    }

    //Igreja-biblia
    public addEvangelicaBibliaOnline(texto){
      console.log(texto);
      window.sessionStorage.setItem('evangelica-biblia-online', texto);
        
      this.inicializar(); 
    }

    //Igreja-agenda evangelica
    public addEvangelicaAgenda(texto){
    console.log(texto);
    window.sessionStorage.setItem('evangelica-agenda', texto);
            
    this.inicializar(); 
    }

    //Igreja-agenda evangelica
    public addMusicasGospel(texto){
      console.log(texto);
      window.sessionStorage.setItem('musicas-gospel', texto);
              
      this.inicializar(); 
      }

    //Igreja-agenda evangelica
    public addEvangelicaNoticias(texto){
      console.log(texto);
      window.sessionStorage.setItem('evangelica-noticias', texto);
              
      this.inicializar(); 
      }

    //google
    public addPublicidadeGoogle(texto){
      console.log(texto);
      window.sessionStorage.setItem('publicidade-google', texto);
              
      this.inicializar(); 
      }

    //google
    public addEvangelicaTestemunhos(texto){
      console.log(texto);
      window.sessionStorage.setItem('evangelica-testemunhos', texto);
              
      this.inicializar(); 
      }

    //dizimo
    public addDizimoDigital(texto){
      console.log(texto);
      window.sessionStorage.setItem('dizimo-digital', texto);
              
      this.inicializar(); 
      }

    //dizimo
    public addSuaIgreja(texto){
      console.log(texto);
      window.sessionStorage.setItem('sua-igreja', texto);
              
      this.inicializar(); 
      }

    //musicas
    public addMusicasCatolicas(texto){
      console.log(texto);
      window.sessionStorage.setItem('musicas-catolicas', texto);
              
      this.inicializar(); 
      }

    //dizimo
    public addNoticiasCatolicas(texto){
      console.log(texto);
      window.sessionStorage.setItem('noticias-catolicas', texto);
              
      this.inicializar(); 
      }

    //dizimo
    public addPastorais(texto){
      console.log(texto);
      window.sessionStorage.setItem('pastorais', texto);
              
      this.inicializar(); 
      }

    //dizimo
    public addPublicidadesInternas(texto){
      console.log(texto);
      window.sessionStorage.setItem('publicidades-internas', texto);
              
      this.inicializar(); 
      }

    //santo
    public addSantoDoDia(texto){
      console.log(texto);
      window.sessionStorage.setItem('santo-do-dia', texto);
              
      this.inicializar(); 
      }

    //santo
    public addLiturgiaDiaria(texto){
      console.log(texto);
      window.sessionStorage.setItem('liturgia-diaria', texto);
              
      this.inicializar(); 
      }

    //catolica
    public addCatolicaAgenda(texto){
      console.log(texto);
      window.sessionStorage.setItem('catolica-agenda', texto);
              
      this.inicializar(); 
      }

    //formulario
    public addFormularios(texto){
      console.log(texto);
      window.sessionStorage.setItem('formularios', texto);
              
      this.inicializar(); 
      }

    //fotos catolicas
    public addCatolicaFotos(texto){
      console.log(texto);
      window.sessionStorage.setItem('catolica-fotos', texto);
              
      this.inicializar(); 
      }

    //fotos catolicas
    public addOutroSuaIdeia(texto){
      console.log(texto);
      window.sessionStorage.setItem('outro-sua-ideia', texto);
              
      this.inicializar(); 
      }

    //restaurante blog
    public addRestauranteBlog(texto){
      console.log(texto);
      window.sessionStorage.setItem('restaurante-blog', texto);
              
      this.inicializar(); 
      }

    //restaurante blog
    public addCardapio(texto){
      console.log(texto);
      window.sessionStorage.setItem('cardapio', texto);
              
      this.inicializar(); 
      } 
      

    //restaurante blog
    public addCartaoFidelidade(texto){
      console.log(texto);
      window.sessionStorage.setItem('cartao-fidelidade', texto);
              
      this.inicializar(); 
      } 

    //restaurante blog
    public addRestauranteContato(texto){
      console.log(texto);
      window.sessionStorage.setItem('restaurante-contato', texto);
              
      this.inicializar(); 
      } 

    //restaurante blog
    public addRestauranteFotos(texto){
      console.log(texto);
      window.sessionStorage.setItem('restaurante-fotos', texto);
              
      this.inicializar(); 
      } 

    //restaurante blog
    public addGeofence(texto){
      console.log(texto);
      window.sessionStorage.setItem('geofence', texto);
              
      this.inicializar(); 
      }   
      

    //restaurante blog
    public addRedesSociais(texto){
      console.log(texto);
      window.sessionStorage.setItem('redes-sociais', texto);
              
      this.inicializar(); 
      }   

    //------
    public addReservaMesas(texto){
      console.log(texto);
      window.sessionStorage.setItem('reserva-mesas', texto);
              
      this.inicializar(); 
      } 

    //------
    public addSeuRestaurante(texto){
      console.log(texto);
      window.sessionStorage.setItem('seu-restaurante', texto);
              
      this.inicializar(); 
      } 


    //------
    public addInformacoesEContatos(texto){
      console.log(texto);
      window.sessionStorage.setItem('informacoes-e-contatos', texto);
              
      this.inicializar(); 
      } 

    //------
    public addServicosBlog(texto){
      console.log(texto);
      window.sessionStorage.setItem('servicos-blog', texto);
              
      this.inicializar(); 
      } 

    //------
    public addServicosCartaoFidelidade(texto){
      console.log(texto);
      window.sessionStorage.setItem('servicos-cartao-fidelidade', texto);
              
      this.inicializar(); 
      }


    //------
    public addDashBoard(texto){
      console.log(texto);
      window.sessionStorage.setItem('dash-board', texto);
              
      this.inicializar(); 
      }          



//########################## FIM METODOS ADD ########################## 




  //popula todos os itens do formulário
  inicializar(){
    this.blog = window.sessionStorage.getItem('blog');
    this.modalidade = window.sessionStorage.getItem('modalidade');
    this.instrucao = window.sessionStorage.getItem('instrucao');
    this.contato= window.sessionStorage.getItem('contato');
    this.dicasSaude = window.sessionStorage.getItem('dicas-saude');
    this.dicasTreino = window.sessionStorage.getItem('dicas-treino');
    this.fotos= window.sessionStorage.getItem('fotos');
    this.empresa = window.sessionStorage.getItem('empresa');
    this.nome = window.sessionStorage.getItem('nome');
    this.email = window.sessionStorage.getItem('email');
    this.telefone = window.sessionStorage.getItem('telefone');
    this.areaEstudo = window.sessionStorage.getItem('area-estudo');
    this.cardapioNutricional = window.sessionStorage.getItem('cardapio-nutricional');
    this.eventos = window.sessionStorage.getItem('eventos');
    this.mensagens = window.sessionStorage.getItem('mensagens');
    this.muralFotos = window.sessionStorage.getItem('mural-fotos');
    this.noticias = window.sessionStorage.getItem('noticias');
    this.ideia = window.sessionStorage.getItem('ideia');
    this.igrejaInstrucao = window.sessionStorage.getItem('igreja-instrucao');
    this.evangelicaFotos = window.sessionStorage.getItem('evangelica-fotos');
    this.evangelicaBibliaOnline = window.sessionStorage.getItem('evangelica-biblia-online');
    this.evangelicaAgenda = window.sessionStorage.getItem('evangelica-agenda');
    this.musicasGospel= window.sessionStorage.getItem('musicas-gospel');
    this.evangelicaNoticias= window.sessionStorage.getItem('evangelica-noticias');
    this.publicidadeGoogle = window.sessionStorage.getItem('publicidade-google');
    this.evangelicaTestemunhos = window.sessionStorage.getItem('evangelica-testemunhos');
    this.dizimoDigital = window.sessionStorage.getItem('dizimo-digital');
    this.suaIgreja = window.sessionStorage.getItem('sua-igreja');
    this.musicasCatolicas = window.sessionStorage.getItem('musicas-catolicas');
    this.noticiasCatolicas = window.sessionStorage.getItem('noticias-catolicas');
    this.pastorais = window.sessionStorage.getItem('pastorais');
    this.publicidadesInternas = window.sessionStorage.getItem('publicidades-internas');
    this.santoDoDia = window.sessionStorage.getItem('santo-do-dia');
    this.liturgiaDiaria = window.sessionStorage.getItem('liturgia-diaria');
    this.catolicaAgenda = window.sessionStorage.getItem('catolica-agenda');
    this.formularios = window.sessionStorage.getItem('formularios');
    this.catolicaFotos = window.sessionStorage.getItem('catolica-fotos');
    this.outroSuaIdeia = window.sessionStorage.getItem('outro-sua-ideia');
    this.restauranteBlog = window.sessionStorage.getItem('restaurante-blog');
    this.cardapio = window.sessionStorage.getItem('cardapio');
    this.cartaoFidelidade= window.sessionStorage.getItem('cartao-fidelidade');
    this.restauranteContato= window.sessionStorage.getItem('restaurante-contato');
    this.restauranteFotos= window.sessionStorage.getItem('restaurante-fotos');
    this.geofence= window.sessionStorage.getItem('geofence');
    this.redesSociais= window.sessionStorage.getItem('redes-sociais');
    this.reservaMesas= window.sessionStorage.getItem('reserva-mesas');
    this.seuRestaurante= window.sessionStorage.getItem('seu-restaurante');
    this.informacoesEContatos = window.sessionStorage.getItem('informacoes-e-contatos');

    this.servicosBlog = window.sessionStorage.getItem('servicos-blog');
    this.servicosCartaoFidelidade = window.sessionStorage.getItem('servicos-cartao-fidelidade');
    this.dashBoard = window.sessionStorage.getItem('dash-board');
  }


//########################## ENVIA POST ################################################


criarJson(){
  this.inicializar();
}


postJSON() {
  this.inicializar();




  var json = JSON.stringify(
    
    {
      'modalidade: ': this.modalidade,
      'instrucao: ': this.instrucao,
      'blog: ':this.blog,
      'contato: ':this.contato,
      'dicasSaude: ':this.dicasSaude,
      'dicasTreino: ':this.dicasTreino,
      'fotos: ':this.fotos,
      'empresa: ':this.empresa,
      'area de estudo: ':this.areaEstudo,
      'cardapio nutricional: ':this.cardapioNutricional,
      'eventos: ':this.eventos,
      'mensagens: ':this.mensagens,
      'mural de fotos: ':this.muralFotos,
      'noticias: ':this.noticias,
      'ideia: ':this.ideia,
      'igreja instrucao: ':this.igrejaInstrucao,
      'modalidade evangelica fotos: ':this.evangelicaFotos,
      'biblia online: ':this.evangelicaBibliaOnline,
      'agenda: ':this.evangelicaAgenda,
      'musicas gospel: ':this.musicasGospel,
      'evangelica noticias:':this.evangelicaNoticias,
      'publicidade google: ':this.publicidadeGoogle,
      'testemunhos evangélicos: ':this.evangelicaTestemunhos,
      'dizimo digital: ':this.dizimoDigital,
      'sua igreja: ':this.suaIgreja,
      'musicas catolicas: ':this.musicasCatolicas,
      'noticias catolicas: ':this.noticiasCatolicas,
      'pastorais: ':this.pastorais,
      'publicidades internas: ':this.publicidadesInternas,
      'santo do dia: ':this.santoDoDia,
      'liturgia diaria: ':this.liturgiaDiaria,
      'católica agenda: ':this.catolicaAgenda,
      'formulários: ':this.formularios,
      'católica fotos: ':this.catolicaFotos,
      'outro sua ideia: ':this.outroSuaIdeia,
      'restaurante blog: ':this.restauranteBlog,
      'cardápio: ':this.cardapio,
      'cartão fidelidade: ':this.cartaoFidelidade,
      'restaurante contato: ':this.restauranteContato,
      'restaurante fotos: ':this.restauranteFotos,
      'geofence: ':this.geofence,
      'redes sociais: ':this.redesSociais,
      'reserva mesas: ':this.reservaMesas,
      'seu restaurante: ':this.seuRestaurante,
      'informacoes e contatos: ':this.informacoesEContatos,
      'servicos blog: ':this.servicosBlog,
      'servicos cartao fidelidade:':this.servicosCartaoFidelidade,
      'dashBoard fácil: ':this.dashBoard,
      'nome: ':this.nome,
      'email: ':this.email,
      'telefone: ':this.telefone,
    }
  );

  var params = json;


  console.log(params);
  var cabe = new Headers();

  cabe.append("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
  cabe.append('Access-Control-Allow-Origin', '*');
  cabe.append('Content-Type', 'application/json');
  
  return this._http.post('http://mundonovoapps.com/email/service.php', 
  params,
   {
      headers : cabe,
      
  })
  .map(res=> res.json());

 
}

//########################## FIM ENVIA POST ################################################

}
/*
      {'modalidade': this.modalidade},
      {'instrucao': this.instrucao},
      {'blog':this.blog},
      {'contato':this.contato},
      {'dicasSaude':this.dicasSaude},
      {'dicasTreino':this.dicasTreino},
      {'fotos':this.fotos},
      {'empresa':this.empresa},
      {'areadeestudo':this.areaEstudo},
      {'cardapio nutricional':this.cardapioNutricional},
      {'eventos: ':this.eventos},
      {'mensagens: ':this.mensagens},
      {'mural de fotos: ':this.muralFotos},
      {'noticias: ':this.noticias},
      {'ideia: ':this.ideia},
      {'igreja instrucao: ':this.igrejaInstrucao},
      {'modalidade evangelica fotos: ':this.evangelicaFotos},
      {'biblia online: ':this.evangelicaBibliaOnline},
      {'agenda: ':this.evangelicaAgenda},
      {'musicas gospel: ':this.musicasGospel},
      {'evangelica noticias:':this.evangelicaNoticias},
      {'publicidade google: ':this.publicidadeGoogle},
      {'testemunhos evangélicos: ':this.evangelicaTestemunhos},
      {'dizimo digital: ':this.dizimoDigital},
      {'sua igreja: ':this.suaIgreja},
      {'musicas catolicas: ':this.musicasCatolicas},
      {'noticias catolicas: ':this.noticiasCatolicas},
      {'pastorais: ':this.pastorais},
      {'publicidades internas: ':this.publicidadesInternas},
      {'santo do dia: ':this.santoDoDia},
      {'liturgia diaria: ':this.liturgiaDiaria},
      {'católica agenda: ':this.catolicaAgenda},
      {'formulários: ':this.formularios},
      {'católica fotos: ':this.catolicaFotos},
      {'outro sua ideia: ':this.outroSuaIdeia},
      {'restaurante blog: ':this.restauranteBlog},
      {'cardápio: ':this.cardapio},
      {'cartão fidelidade: ':this.cartaoFidelidade},
      {'restaurante contato: ':this.restauranteContato},
      {'restaurante fotos: ':this.restauranteFotos},
      {'geofence: ':this.geofence},
      {'redes sociais: ':this.redesSociais},
      {'reserva mesas: ':this.reservaMesas},
      {'seu restaurante: ':this.seuRestaurante},
      {'informacoes e contatos: ':this.informacoesEContatos},
      {'servicos blog: ':this.servicosBlog},
      {'servicos cartao fidelidade:':this.servicosCartaoFidelidade},
      {'dashBoard fácil: ':this.dashBoard},
      {'nome: ':this.nome},
      {'email: ':this.email},
      {'telefone: ':this.telefone},


*/