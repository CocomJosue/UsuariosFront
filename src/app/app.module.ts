import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistraUsuarioComponent,
    BorrarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    ,MatButtonModule
    ,MatFormFieldModule
    ,MatInputModule
    ,MatIconModule
    ,MatCardModule
    ,MatDividerModule
    ,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
