import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public apiURL: string;
  public apiPath: string;
  public fullURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.apiURL;
    this.apiPath = environment.categoryAPIPath;
    this.fullURL = `${this.apiURL}/${this.apiPath}`;
  }

  public getAllCategoryData() {
    return this.http.get<{
      success: boolean;
      data: Category[];
      message: string;
    }>(this.fullURL);
  }
}
