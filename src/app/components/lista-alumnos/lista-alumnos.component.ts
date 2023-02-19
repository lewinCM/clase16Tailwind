import { Component } from '@angular/core';
import { Alumnos } from 'src/app/interfaces/alumnos.interfaces';
import { AlumnosService } from 'src/app/services/services.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  title: string = 'Listado de Alumnos'
  arryAlumno: Alumnos[] = []

  constructor(private alumnosService: AlumnosService) {

  }

  ngOnInit(): void {
    this.arryAlumno = this.alumnosService.getAll()
    console.log(this.arryAlumno);

  }
  SelectCurso($event: any): void {
    let course = $event.target.value;
    console.log($event.target.value)

    this.arryAlumno = this.alumnosService.getByCurso(course)


  }

}
