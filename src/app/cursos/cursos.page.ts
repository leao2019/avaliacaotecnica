import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  addUsuarios(){
    this.route.navigate(['/adcurso'])

  }

}
