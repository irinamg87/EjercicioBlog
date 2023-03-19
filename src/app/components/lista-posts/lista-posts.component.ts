import { Component, OnInit } from '@angular/core';
import { Post, POSTS } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {
  posts: Post[] = POSTS;
  categorias: string[] = ['Cocina', 'Viajes', 'Entretenimiento', 'Moda', 'Tecnología'];
  categoriaSeleccionada = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = POSTS
    this.categorias = [...new Set(this.posts.map(post => post.categoria))];
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

  filtrarPorCategoria(post: Post): boolean {
    if (!this.categoriaSeleccionada) {
      return true;
    } else {
      return post.categoria === this.categoriaSeleccionada;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {
  transform(posts: Post[], categoriaSeleccionada: string): Post[] {
    if (!categoriaSeleccionada) {
      return posts;
    } else {
      return posts.filter(post => post.categoria === categoriaSeleccionada);
    }
  }
}


