import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html',
  styleUrls: ['./borrar-usuario.component.css']
})
export class BorrarUsuarioComponent {

  IdUsuario: number = 0;
  constructor(private usuarioService: ConsumoApiService) {}

  eliminarUsuario() {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(this.IdUsuario).subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }

}
