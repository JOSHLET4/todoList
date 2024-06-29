import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  @Input() agregarTareasRecibidas: string[] = [];

  //Metodo para a agregar tareas
  nuevaTarea = "";
  agregarTarea() {
    if (this.nuevaTarea.trim() !== "") {
      this.agregarTareasRecibidas.push(this.nuevaTarea);
      this.nuevaTarea = "";
    }
  }
}
