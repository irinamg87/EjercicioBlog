import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoPost: Post = {
    titulo: '',
    texto: '',
    autor: '',
    imagen: '',
    fecha: new Date(),
    categoria: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  enviarFormulario(formulario: any) {
    if (formulario.valid) {
      this.postService.create(this.nuevoPost);
      formulario.resetForm();
      this.nuevoPost = {
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: new Date(),
        categoria: ''
      };
    }
  }

}

