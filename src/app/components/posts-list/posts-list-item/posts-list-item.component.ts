import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {timer} from "rxjs";

import {PostsService} from "../../../services/posts/posts.service";

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListItemComponent implements OnInit {

  @Input()
  public post: any;

  date: Date;

  constructor(private postsService: PostsService) {
    this.setDate();
  }

  ngOnInit() {
    timer(3000).subscribe(() => {
      this.setDate();
      timer(3000).subscribe(() => {
        this.changePostSubTitle();
      });
    });
  }

  private setDate() {
    this.date = new Date();
  }

  private changePostSubTitle() {
    if (this.post.id === 2) {
      const newPost = {...this.post};
      newPost.subtitle += ' postfix :)';
      this.postsService.pushPost(newPost);
    }
  }
}
