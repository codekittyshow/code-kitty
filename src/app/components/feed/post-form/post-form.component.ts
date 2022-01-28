import { MessageService } from './../../../services/message.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage/';
import { AngularFireAuth } from '@angular/fire/auth';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  public post: Post = {};
  
  user: any | null;
  createdDate = new Date().toISOString();

  url: any;
  basePath = '/images';
  downloadableURL = '';
  task: AngularFireUploadTask | undefined;
  progressValue: Observable<number> | undefined;
  categories: Category[] = [];

  @Input() inputPost: Post = {};
  public isEdit : boolean = false

  constructor(
    public activeModal: NgbActiveModal,
    private fireStorage: AngularFireStorage,
    public afAuth: AngularFireAuth,
    private postService: PostService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private categoryService: CategoryService
  ) {
    afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.isEdit = (this.inputPost !== undefined && this.inputPost !== {}) ? true : false;

    if(this.isEdit === true) {
      this.post = this.inputPost;
    }
  }

  publishPost(form: Post) {
    let post = {
      ...form,
      userId: this.user.uid,
      createdDate: this.createdDate,
      imageURL: this.downloadableURL,
    };

    if(this.isEdit === true) {
      this.postService.update(post).subscribe(
        (res) => {
          this.messageService.setMessage('Post Updated');
          this.activeModal.close();
          this.toastr.success('Post updated successfully..!');
        },
        (err) => {
          console.error(err);
        }
      )
    } else {
      this.postService.addPost(post).subscribe(
        (res) => {
          this.messageService.setMessage('Post Added');
          this.activeModal.close();
          this.toastr.success('Post published successfully..!');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  imgPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      //Image Upload
      this.firestoreImageUpload(event);
    }
  }

  async firestoreImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.fireStorage.upload(filePath, file);

      this.progressValue = this.task.percentageChanges() as Observable<number>;

      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.downloadableURL = url;
      });
    } else {
      //this.toastr.error('No images selected..!');
      this.downloadableURL = '';
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategoryData().subscribe((response) => {
      if (response.success) {
        this.categories = response.data;
      }
    });
  }
}
