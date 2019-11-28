import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListHeaderComponent } from './posts-list-header.component';

describe('PostsListHeaderComponent', () => {
  let component: PostsListHeaderComponent;
  let fixture: ComponentFixture<PostsListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
