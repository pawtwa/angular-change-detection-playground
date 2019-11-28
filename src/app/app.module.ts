import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListItemComponent } from './components/posts-list/posts-list-item/posts-list-item.component';
import { PostsListHeaderComponent } from './components/posts-list/posts-list-header/posts-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsListItemComponent,
    PostsListHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
