import { NaoEncontradoComponent } from './navegacao/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module')
      .then(mod => mod.ClienteModule)
  },
  {
    path: '**', component: NaoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
