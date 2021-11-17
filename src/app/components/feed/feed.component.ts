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

  ngOnInit(): void {}

  openPostModal() {
    const modalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }

  getAllPosts() { 
      this.postservice.getAllPostsData().subscribe((data) => {
        this.posts = data;
    });
      
      this. loading = true; 
      this.postservice.getAllPostsData().subscribe (
        (response) => { 
          if (response. success) {
            this.posts = response.data.reverse();
          }
          this. loading = false;
        },
      (error) => {
      console.error('Error : ' + error.message);
      }
      );
    }
}
