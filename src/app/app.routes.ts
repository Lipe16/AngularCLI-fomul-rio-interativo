import {Routes} from '@Angular/router'


import { PerguntaComponent } from './form/inicio/pergunta/pergunta.component';
import { ModalidadeComponent } from './form/inicio/pergunta/modalidade/modalidade.component';
import { InicioComponent } from './form/inicio/inicio.component';
import { InstrucaoComponent } from './form/inicio/pergunta/instrucao/instrucao.component';
import { BlogComponent } from './form/inicio/pergunta/blog/blog.component';
import { ContatoComponent } from './form/inicio/pergunta/contato/contato.component';
import { DicasSaudeComponent } from './form/inicio/pergunta/dicas-saude/dicas-saude.component';
import { DicasTreinoComponent } from './form/inicio/pergunta/dicas-treino/dicas-treino.component';
import { FotosComponent } from './form/inicio/pergunta/fotos/fotos.component';
import { SuaEmpresaComponent } from './form/inicio/pergunta/sua-empresa/sua-empresa.component';
import { SeuNomeComponent } from './form/inicio/pergunta/seu-nome/seu-nome.component';
import { SeuEmailComponent } from './form/inicio/pergunta/seu-email/seu-email.component';
import { SeuTelefoneComponent } from './form/inicio/pergunta/seu-telefone/seu-telefone.component';
import { AcademicoInstrucaoComponent } from './form/inicio/pergunta/academico-instrucao/academico-instrucao.component';
import { AreaEstudoComponent } from './form/inicio/pergunta/area-estudo/area-estudo.component';
import { CardapioNutricionalComponent } from './form/inicio/pergunta/cardapio-nutricional/cardapio-nutricional.component';
import { EventosComponent } from './form/inicio/pergunta/eventos/eventos.component';
import { MensagensComponent } from './form/inicio/pergunta/mensagens/mensagens.component';
import { MuralFotosComponent } from './form/inicio/pergunta/mural-fotos/mural-fotos.component';
import { NoticiasComponent } from './form/inicio/pergunta/noticias/noticias.component';
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



export const ROUTES: Routes = [
{path:'', component: InicioComponent},
{path:'pergunta', component: PerguntaComponent,
    children:[
        {path:'', redirectTo: 'modalidades', pathMatch: 'full'},
        {path:'modalidades', component: ModalidadeComponent},
        {path:'instrucao', component: InstrucaoComponent},
        {path:'academia-instrucao', component: InstrucaoComponent},
        {path:'escola-instrucao', component: AcademicoInstrucaoComponent},
        {path:'area-estudo', component: AreaEstudoComponent},
        {path:'cardapio-nutricional', component: CardapioNutricionalComponent},
        {path:'eventos', component: EventosComponent},
        {path:'mensagens', component: MensagensComponent},
        {path:'mural-fotos', component: MuralFotosComponent},
        {path:'noticias', component: NoticiasComponent},
        {path:'sua-ideia', component: SuaIdeiaComponent},
        {path:'igreja-instrucao', component: IgrejaInstrucaoComponent},
        {path:'igreja-instrucao02', component: IgrejaInstrucao02Component},
        {path:'evangelica-fotos', component: EvangelicaFotosComponent},
        {path:'evangelica-biblia-online', component: EvangelicaBibliaOnlineComponent},
        {path:'evangelica-agenda', component: EvangelicaAgendaComponent},
        {path:'musicas-gospel', component: MusicasGospelComponent},
        {path:'evangelica-noticias', component: EvangelicaNoticiasComponent},
        {path:'publicidade-google', component: PublicidadeGoogleComponent},
        {path:'evangelica-testemunhos', component: EvangelicaTestemunhosComponent},
        {path:'dizimo-digital', component: DizimoDigitalComponent},
        {path:'sua-igreja', component: SuaIgrejaComponent},
        {path:'musicas-catolicas', component: MusicasCatolicasComponent},
        {path:'noticias-catolicas', component: CatolicaNoticiasComponent},
        {path:'pastorais', component: PastoraisComponent},
        {path:'publicidades-internas', component: PublicidadesInternasComponent},
        {path:'santo-do-dia', component: SantoDoDiaComponent},
        {path:'liturgia-diaria', component: LiturgiaDiariaComponent},
        {path:'catolica-agenda', component: CatolicaAgendaComponent},
        {path:'formularios', component: FormulariosComponent},
        {path:'catolica-fotos', component: CatolicaFotosComponent},
        {path:'outro-sua-ideia', component: OutroSuaIdeiaComponent},
        {path:'restaurante-instrucao', component: RestauranteInstrucaoComponent},
        {path:'restaurante-blog', component: RestauranteBlogComponent},
        {path:'cardapio', component: CardapioComponent},
        {path:'cartao-fidelidade', component: CartaoFidelidadeComponent},
        {path:'restaurante-contato', component: RestauranteContatoComponent},
        {path:'restaurante-fotos', component: RestauranteFotosComponent},
        {path:'geofence', component: GeofenceComponent},
        {path:'redes-sociais', component: RedesSociaisComponent},
        {path:'reserva-mesas', component: ReservaMesasComponent},
        {path:'seu-restaurante', component: SeuRestauranteComponent},
        {path:'servicos-instrucao', component: ServicosInstrucaoComponent},
        {path:'informacoes-e-contato', component: InformacoesEContatoComponent},
        {path:'servicos-blog', component: ServicosBlogComponent},
        {path:'servicos-cartao-fidelidade', component: ServicosCartaoFidelidadeComponent},
        {path:'dash-board', component: DashboardFacilComponent},
        {path:'ideia-instrucao', component: IdeiaInstrucaoComponent},
        
        {path:'blog', component: BlogComponent},
        {path:'contato', component: ContatoComponent},
        {path:'dicas-saude', component: DicasSaudeComponent},
        {path:'dicas-treino', component: DicasTreinoComponent},
        {path:'fotos', component: FotosComponent},
        {path:'sua-empresa', component: SuaEmpresaComponent},
        {path:'seu-nome', component: SeuNomeComponent},
        {path:'seu-email', component: SeuEmailComponent},
        {path:'seu-telefone', component: SeuTelefoneComponent},
        {path:'confirmacao', component: ConfirmacaoComponent},

        {path:'rever', component: ReverInformacoesComponent}
    ]}
]
