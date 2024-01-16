import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from './services/consumo-api.service';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listaUsuarios: Usuario[] | undefined;

  constructor(private servicio: ConsumoApiService) {}

  ngOnInit(): void {
    this.servicio.getDatos().subscribe((datos) => {
      this.listaUsuarios = datos;
      console.log(datos);
    });
  }
}
