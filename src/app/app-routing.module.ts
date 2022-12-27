import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperacaosenha',
    loadChildren: () => import('./recuperacaosenha/recuperacaosenha.module').then( m => m.RecuperacaosenhaPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'cursovideo',
    loadChildren: () => import('./cursovideo/cursovideo.module').then( m => m.CursovideoPageModule)
  },
  {
    path: 'cursovideoo',
    loadChildren: () => import('./cursovideoo/cursovideoo.module').then( m => m.CursovideooPageModule)
  },
  {
    path: 'cursovideo3',
    loadChildren: () => import('./cursovideo3/cursovideo3.module').then( m => m.Cursovideo3PageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'adcurso',
    loadChildren: () => import('./adcurso/adcurso.module').then( m => m.AdcursoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
