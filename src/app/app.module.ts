import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { FiltroCategoriaPipe } from './components/lista-posts/lista-posts.component';

import { PostService } from './services/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FiltroCategoriaPipe,
    ListaPostsComponent,
    FormularioComponent
  ],
  imports: [
    NgModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
