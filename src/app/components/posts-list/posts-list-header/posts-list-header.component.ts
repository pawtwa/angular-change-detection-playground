import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-posts-list-header',
  templateUrl: './posts-list-header.component.html',
  styleUrls: ['./posts-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListHeaderComponent implements OnInit {

  public date: Date;

  constructor() {
    this.setDate();
  }

  ngOnInit() {
    timer(3000).subscribe(() => {
      this.setDate();
    });
  }

  private setDate() {
    this.date = new Date();
  }
}
