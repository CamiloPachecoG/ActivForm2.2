import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { MostrarListComponent } from './mostrar-list/mostrar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MostrarListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
