import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL: string;
  private apiPath: string;
  private fullUrl: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.apiURL;
    this.apiPath = environment.postAPIPath;
    this.fullUrl = `${this.apiURL}/${this.apiPath}`;
  }

  /**
   * Create new Post
   * @param post
   */

  public addPost(post: Post) {
    return this.http.post<Post>(this.fullUrl, post);
  }

  // GET All posts with users
  public getAllPostsData() {
    const PATH = `${this.fullUrl}/users/all`;
    return this.http.get<{ success: boolean; data: Post[]; message: string }>(PATH);
  }

  // GET MY posts 
  public getMyPosts(ID: any) {
    const PATH = `${this.fullUrl}/user/${ID}`;
    return this.http.get<{ success: boolean; data: Post[]; message: string }>(PATH);
  }
}