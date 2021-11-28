import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  loading: boolean = true;
  category: string | any;
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  constructor(
    router: Router,
    auth: AuthService,
    private route: ActivatedRoute,
    public modalService: NgbModal,
    public postService: PostService,
    private messageService: MessageService
  ) {
    auth.user$.subscribe((user) => {
      if (!user) {
        router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.populatePosts();
    this.messageService.getMessage().subscribe((message) => {
      this.populatePosts();
    });
  }

  openPostModal() {
    const modalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }

  private populatePosts() {
    this.loading = false;
    this.postService
      .getAllPostsData()
      .pipe(
        switchMap((post) => {
          this.posts = post.data.reverse();
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');
        this.filterPosts();
      });
  }

  private filterPosts() {
    this.filteredPosts = this.category
      ? this.posts.filter((post) => {
          return post.categoryName === this.category;
        })
      : this.posts;
  }
}
