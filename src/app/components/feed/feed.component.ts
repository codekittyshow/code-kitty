import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  loading: boolean = true;
  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}

  openPostModal() {
    const modalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }
}
