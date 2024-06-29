import { Component, OnInit } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  // array
  tareas: string[] = [];
  // contador
  contador: number = 1;
  // propiedad para cambiar el estado de la tarea
  tareaCompletada: boolean[] = [];

  ngOnInit() {
    this.cargarTareas();
  }

  // Método para cambiar estado
  cambiarEstado(index: number) {
    this.tareaCompletada[index] = !this.tareaCompletada[index];
    this.guardarTareas();
  }

  // Método para cargar tareas desde el almacenamiento local
  cargarTareas() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const tareasGuardadas = localStorage.getItem('tareas');
      const tareaCompletadaGuardadas = localStorage.getItem('tareaCompletada');
      if (tareasGuardadas && tareaCompletadaGuardadas) {
        this.tareas = JSON.parse(tareasGuardadas);
        this.tareaCompletada = JSON.parse(tareaCompletadaGuardadas);
      } else {
        // Cargar tareas por defecto si no hay datos en localStorage
        this.tareas = [];
        this.tareaCompletada = Array(this.tareas.length).fill(false);
      }
    }
  }

  // Método para guardar tareas en el almacenamiento local
  guardarTareas() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
      localStorage.setItem('tareaCompletada', JSON.stringify(this.tareaCompletada));
    }
  }
}