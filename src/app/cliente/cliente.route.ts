import { ClienteTelaInicialComponent } from './cliente-tela-inicial/cliente-tela-inicial.component';
import { ClienteAppComponent } from './cliente.app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCadastrarComponent } from './cliente-tela-inicial/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteEditarComponent } from './cliente-tela-inicial/cliente-editar/cliente-editar.component';
import { ClienteDeletarComponent } from './cliente-tela-inicial/cliente-deletar/cliente-deletar.component';

const routes: Routes = [
    {
        path: '', component: ClienteAppComponent,
        children: [
            { path: '', component: ClienteTelaInicialComponent },
            { path: 'cadastrar', component: ClienteCadastrarComponent },
            { path: 'editar/:id', component: ClienteEditarComponent },
            { path: 'deletar/:id', component: ClienteDeletarComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
