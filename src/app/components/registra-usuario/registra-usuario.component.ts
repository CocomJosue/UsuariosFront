import { Component } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registra-usuarios',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.css'],
})
export class RegistraUsuarioComponent {
  nuevoUsuario: Usuario = {
    idUsuario: 2,
    apPaterno: '',
    apMaterno: '',
    nombre: '',
    edad: 0,
  };

  constructor(private usuarioService: ConsumoApiService) {}

  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe(
      (usuarioRegistrado) => {
        console.log('Usuario registrado:', usuarioRegistrado);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
