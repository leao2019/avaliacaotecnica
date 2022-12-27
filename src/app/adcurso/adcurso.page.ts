import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adcurso',
  templateUrl: './adcurso.page.html',
  styleUrls: ['./adcurso.page.scss'],
})
export class AdcursoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Usuarios(){
    this.router.navigate(['cursos'])
  }

}
