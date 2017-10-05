import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViviendasComponent } from './viviendas/viviendas.component';
import { FiltradoViviendas } from 'app/filtrado-viviendas.pipe';
import { FiltradoFavoritos } from 'app/filtrado-favoritos.pipe';
import { FavHeartComponent } from './fav-heart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViviendasComponent,
    FiltradoViviendas,
    FiltradoFavoritos,
    FavHeartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
