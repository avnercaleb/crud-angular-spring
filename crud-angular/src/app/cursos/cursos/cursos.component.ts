import { Component } from '@angular/core';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: Curso[] = [
    {_id: "1", nome: "Angular", categoria: "Front-End"}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
  }

  ngOnInit(): void {

  }
}
