import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  create(post: Post): void {
    this.posts.push(post);
  }

  getAll(): Post[] {
    return this.posts;
  }

  getByCategoria(cat: string): Post[] {
    return this.posts.filter(post => post.categoria === cat);
  }
}
