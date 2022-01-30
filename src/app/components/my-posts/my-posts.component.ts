import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getMyPosts();
    this.messageService.getMessage().subscribe((message) => {
      this.getMyPosts();
    });
  }

  getMyPosts() {
    this.authService.user$.subscribe((result) => {
      this.postService.getMyPosts(result?.uid).subscribe((result) => {
        if (result.success) {
          this.posts = result.data;
        }
      });
    });
  }
}
