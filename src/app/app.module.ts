import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { InicioComponent } from './form/inicio/inicio.component';
import { PerguntaComponent } from './form/inicio/pergunta/pergunta.component';
import { ModalidadeComponent } from './form/inicio/pergunta/modalidade/modalidade.component';
import { InstrucaoComponent } from './form/inicio/pergunta/instrucao/instrucao.component';
import { BlogComponent } from './form/inicio/pergunta/blog/blog.component';

import {TarefaService} from './tarefa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './form/inicio/pergunta/contato/contato.component';
import { DicasSaudeComponent } from './form/inicio/pergunta/dicas-saude/dicas-saude.component';
import { DicasTreinoComponent } from './form/inicio/pergunta/dicas-treino/dicas-treino.component';
import { FotosComponent } from './form/inicio/pergunta/fotos/fotos.component';
import { SuaEmpresaComponent } from './form/inicio/pergunta/sua-empresa/sua-empresa.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api

import {EditorModule} from 'primeng/editor';
import { SeuNomeComponent } from './form/inicio/pergunta/seu-nome/seu-nome.component';
import {InputTextModule} from 'primeng/inputtext';
import { SeuEmailComponent } from './form/inicio/pergunta/seu-email/seu-email.component';
import { SeuTelefoneComponent } from './form/inicio/pergunta/seu-telefone/seu-telefone.component';
import {InputMaskModule} from 'primeng/inputmask';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AcademicoInstrucaoComponent } from './form/inicio/pergunta/academico-instrucao/academico-instrucao.component';
import { AreaEstudoComponent } from './form/inicio/pergunta/area-estudo/area-estudo.component';
import { CardapioNutricionalComponent } from './form/inicio/pergunta/cardapio-nutricional/cardapio-nutricional.component';
import { EventosComponent } from './form/inicio/pergunta/eventos/eventos.component';
import { MensagensComponent } from './form/inicio/pergunta/mensagens/mensagens.component';
import { NoticiasComponent } from './form/inicio/pergunta/noticias/noticias.component';
import { MuralFotosComponent } from './form/inicio/pergunta/mural-fotos/mural-fotos.component';
import { SuaIdeiaComponent } from './form/inicio/pergunta/sua-ideia/sua-ideia.component';
import { IgrejaInstrucaoComponent } from './form/inicio/pergunta/igreja-instrucao/igreja-instrucao.component';
import { IgrejaInstrucao02Component } from './form/inicio/pergunta/igreja-instrucao02/igreja-instrucao02.component';
import { EvangelicaFotosComponent } from './form/inicio/pergunta/evangelica-fotos/evangelica-fotos.component';
import { EvangelicaBibliaOnlineComponent } from './form/inicio/pergunta/evangelica-biblia-online/evangelica-biblia-online.component';
import { EvangelicaAgendaComponent } from './form/inicio/pergunta/evangelica-agenda/evangelica-agenda.component';
import { MusicasGospelComponent } from './form/inicio/pergunta/musicas-gospel/musicas-gospel.component';
import { EvangelicaNoticiasComponent } from './form/inicio/pergunta/evangelica-noticias/evangelica-noticias.component';
import { PublicidadeGoogleComponent } from './form/inicio/pergunta/publicidade-google/publicidade-google.component';
import { EvangelicaTestemunhosComponent } from './form/inicio/pergunta/evangelica-testemunhos/evangelica-testemunhos.component';
import { DizimoDigitalComponent } from './form/inicio/pergunta/dizimo-digital/dizimo-digital.component';
import { SuaIgrejaComponent } from './form/inicio/pergunta/sua-igreja/sua-igreja.component';
import { MusicasCatolicasComponent } from './form/inicio/pergunta/musicas-catolicas/musicas-catolicas.component';
import { CatolicaNoticiasComponent } from './form/inicio/pergunta/catolica-noticias/catolica-noticias.component';
import { PastoraisComponent } from './form/inicio/pergunta/pastorais/pastorais.component';
import { PublicidadesInternasComponent } from './form/inicio/pergunta/publicidades-internas/publicidades-internas.component';
import { SantoDoDiaComponent } from './form/inicio/pergunta/santo-do-dia/santo-do-dia.component';
import { LiturgiaDiariaComponent } from './form/inicio/pergunta/liturgia-diaria/liturgia-diaria.component';
import { CatolicaAgendaComponent } from './form/inicio/pergunta/catolica-agenda/catolica-agenda.component';
import { FormulariosComponent } from './form/inicio/pergunta/formularios/formularios.component';
import { CatolicaFotosComponent } from './form/inicio/pergunta/catolica-fotos/catolica-fotos.component';
import { OutroSuaIdeiaComponent } from './form/inicio/pergunta/outro-sua-ideia/outro-sua-ideia.component';
import { RestauranteInstrucaoComponent } from './form/inicio/pergunta/restaurante-instrucao/restaurante-instrucao.component';
import { RestauranteBlogComponent } from './form/inicio/pergunta/restaurante-blog/restaurante-blog.component';
import { CardapioComponent } from './form/inicio/pergunta/cardapio/cardapio.component';
import { CartaoFidelidadeComponent } from './form/inicio/pergunta/cartao-fidelidade/cartao-fidelidade.component';
import { RestauranteContatoComponent } from './form/inicio/pergunta/restaurante-contato/restaurante-contato.component';
import { RestauranteFotosComponent } from './form/inicio/pergunta/restaurante-fotos/restaurante-fotos.component';
import { GeofenceComponent } from './form/inicio/pergunta/geofence/geofence.component';
import { RedesSociaisComponent } from './form/inicio/pergunta/redes-sociais/redes-sociais.component';
import { ReservaMesasComponent } from './form/inicio/pergunta/reserva-mesas/reserva-mesas.component';
import { SeuRestauranteComponent } from './form/inicio/pergunta/seu-restaurante/seu-restaurante.component';
import { ServicosInstrucaoComponent } from './form/inicio/pergunta/servicos-instrucao/servicos-instrucao.component';
import { InformacoesEContatoComponent } from './form/inicio/pergunta/informacoes-e-contato/informacoes-e-contato.component';
import { ServicosBlogComponent } from './form/inicio/pergunta/servicos-blog/servicos-blog.component';
import { ServicosCartaoFidelidadeComponent } from './form/inicio/pergunta/servicos-cartao-fidelidade/servicos-cartao-fidelidade.component';
import { DashboardFacilComponent } from './form/inicio/pergunta/dashboard-facil/dashboard-facil.component';
import { IdeiaInstrucaoComponent } from './form/inicio/pergunta/ideia-instrucao/ideia-instrucao.component';
import { ConfirmacaoComponent } from './form/inicio/pergunta/confirmacao/confirmacao.component';
import { ReverInformacoesComponent } from './form/inicio/pergunta/rever-informacoes/rever-informacoes.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    PerguntaComponent,
    ModalidadeComponent,
    InstrucaoComponent,
    BlogComponent,
    ContatoComponent,
    DicasSaudeComponent,
    DicasTreinoComponent,
    FotosComponent,
    SuaEmpresaComponent,
    SeuNomeComponent,
    SeuEmailComponent,
    SeuTelefoneComponent,
    AcademicoInstrucaoComponent,
    AreaEstudoComponent,
    CardapioNutricionalComponent,
    EventosComponent,
    MensagensComponent,
    NoticiasComponent,
    MuralFotosComponent,
    SuaIdeiaComponent,
    IgrejaInstrucaoComponent,
    IgrejaInstrucao02Component,
    EvangelicaFotosComponent,
    EvangelicaBibliaOnlineComponent,
    EvangelicaAgendaComponent,
    MusicasGospelComponent,
    EvangelicaNoticiasComponent,
    PublicidadeGoogleComponent,
    EvangelicaTestemunhosComponent,
    DizimoDigitalComponent,
    SuaIgrejaComponent,
    MusicasCatolicasComponent,
    CatolicaNoticiasComponent,
    PastoraisComponent,
    PublicidadesInternasComponent,
    SantoDoDiaComponent,
    LiturgiaDiariaComponent,
    CatolicaAgendaComponent,
    FormulariosComponent,
    CatolicaFotosComponent,
    OutroSuaIdeiaComponent,
    RestauranteInstrucaoComponent,
    RestauranteBlogComponent,
    CardapioComponent,
    CartaoFidelidadeComponent,
    RestauranteContatoComponent,
    RestauranteFotosComponent,
    GeofenceComponent,
    RedesSociaisComponent,
    ReservaMesasComponent,
    SeuRestauranteComponent,
    ServicosInstrucaoComponent,
    InformacoesEContatoComponent,
    ServicosBlogComponent,
    ServicosCartaoFidelidadeComponent,
    DashboardFacilComponent,
    IdeiaInstrucaoComponent,
    ConfirmacaoComponent,
    ReverInformacoesComponent,

    
    
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),//metodo forRoot eu passo meu array de rotas***
    FormsModule, 
    AccordionModule,
    EditorModule,
    InputTextModule,
    InputMaskModule,
    HttpModule,
    MessagesModule,
    MessageModule

  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
