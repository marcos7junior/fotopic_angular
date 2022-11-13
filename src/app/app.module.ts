// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

// Dev imports
import { PhotosModule } from './photos/photos.module';

@NgModule({
  // Aqui entram os componentes
  declarations: [
    AppComponent
  ],
  // Aqui entram os modulos
  imports: [
    // Traz recursos do angular para serem usados no navegador
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
