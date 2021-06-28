import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';

import { InicioComponent } from './inicio/inicio.component';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,

    ContatoComponent,


    InicioComponent,

    SobreNosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
