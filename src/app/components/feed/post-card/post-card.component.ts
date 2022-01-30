import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from '../post-form/post-form.component';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input('post') post: Post = {};
  public inMyPosts: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private postService: PostService,
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((result) => {
      if (result.length > 0) {
        this.inMyPosts = result[0].path === 'my-posts' ? true : false;
      }
    });
  }

  public onEdit(): void {
    const modalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    modalRef.componentInstance.inputPost = this.post;
  }

  public onDelete(): void {
    this.postService.delete(this.post).subscribe((result) => {
      if (result.success) {
        this.messageService.setMessage('Post Deleted');
        this.toastr.success('Post deleted successfully..!');
      }
    });
  }
}
