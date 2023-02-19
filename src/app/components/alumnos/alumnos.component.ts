import { Alumnos } from 'src/app/interfaces/alumnos.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  @Input()  miAlumno:Alumnos | any

}
