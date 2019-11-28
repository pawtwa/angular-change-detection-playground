import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public postList$ = this.postsService.getPosts$();

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  trackByFn(index: number, post: any) {
    if (!post) {
      return null;
    }
    return post.id;
  }
}
