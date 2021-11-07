import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL: string;
  private apiPath: string;
  private fullUrl: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.apiURL;
    this.apiPath = environment.userAPIPath;
    this.fullUrl = `${this.apiURL}/${this.apiPath}`;
  }

  /**
   * Add new User
   * @param user
   */
  public addUser(user: User) {
    return this.http.post(this.fullUrl, user);
  }
}
