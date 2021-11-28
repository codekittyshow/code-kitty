import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  loading: boolean = true;

  posts:Post[] = [];
  constructor(public modalService: NgbModal,public postservice: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  openPostModal() {
    const modalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }

  getAllPosts() { 
      this. loading = true; 
      this.postservice.getAllPostsData().subscribe (
        (response: { success: any; data: Post[]; }) => { 
          if (response.success) {
            this.posts = response.data.reverse();
          }
          this. loading = false;
        },
      (error: { message: string; }) => {
      console.error('Error : ' + error.message);
      }
      );
    }
}
