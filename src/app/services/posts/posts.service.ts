import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsList$ = new BehaviorSubject<any[]>([
    {
      id: 1,
      title: 'Post One',
      subtitle: 'Post One Subtitle',
      description: 'Post One Description'
    },
    {
      id: 2,
      title: 'Post Two',
      subtitle: 'Post One Two',
      description: 'Post One Two'
    },
    {
      id: 3,
      title: 'Post Three',
      subtitle: 'Post One Three',
      description: 'Post One Three'
    },
    {
      id: 4,
      title: 'Post Four',
      subtitle: 'Post One Four',
      description: 'Post One Four'
    }
  ]);

  constructor() {}

  public getPosts$(): Observable<any[]> {
    return this.postsList$.asObservable().pipe(delay(1000));
  }

  /**
   * TODO
   * @param post
   */
  pushPost(post: any): void {
    const currentPosts = this.postsList$.getValue();
    let postExistedIndex = currentPosts.findIndex((item: any) => item.id === post.id);
    if (postExistedIndex >= 0) {
      currentPosts[postExistedIndex] = {...post};
    } else {
      currentPosts.push(post);
    }
    this.postsList$.next([...PostsService.shuffle(currentPosts)]);
  }

  private static shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
