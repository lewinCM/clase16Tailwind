import { ALUMNOS } from './../db/alumnos';
import { Alumnos } from 'src/app/interfaces/alumnos.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private arrAlumnos: Alumnos[] = ALUMNOS

  constructor() { }

  getAll(): Alumnos[] {
    return this.arrAlumnos
  }
  getByCurso(pCourse: string): Alumnos[] {
    return this.arrAlumnos.filter(alumno => alumno.curso.includes(pCourse))
  }
}
