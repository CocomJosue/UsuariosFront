import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  usuarioEditado: Usuario = {
    idUsuario: 0,
    apPaterno: '',
    apMaterno: '',
    nombre: '',
    edad: 0,
  };

  constructor(private usuarioService: ConsumoApiService) {}

  guardarEdicion() {
    this.usuarioService.editarUsuario(this.usuarioEditado).subscribe(
      (usuarioActualizado) => {
        console.log('Usuario actualizado:', usuarioActualizado);
          this.usuarioEditado = {
          idUsuario: 0,
          apPaterno: '',
          apMaterno: '',
          nombre: '',
          edad: 0,
        };
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }
}
