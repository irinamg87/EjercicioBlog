import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
//import { NewPostComponent } from './new-post/new-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [

  { path: 'posts', component: PostsComponent },
  { path: 'lista-posts', component: ListaPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
