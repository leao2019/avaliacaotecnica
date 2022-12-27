import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'cursos', icon: 'home' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    //{ title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Pesquisar', url: 'pesquisar', icon: 'search' },
    { title: 'Configurações', url: 'configuracao', icon: 'settings' },
    { title: 'Sair', url: 'login', icon: 'power' },
  ];
  public labels = [];
  constructor() {}
}
