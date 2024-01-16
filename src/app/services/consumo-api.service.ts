import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private apiUrl = 'https://localhost:7188/api/Usuarios';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  registrarUsuario(nuevoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, nuevoUsuario);
  }

  editarUsuario(usuarioEditado: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuarioEditado.idUsuario}`;
    return this.http.put<Usuario>(url, usuarioEditado);
  }

  eliminarUsuario(idUsuario: number): Observable<void> {
    const url = `${this.apiUrl}/${idUsuario}`;
    return this.http.delete<void>(url);
  }
}
