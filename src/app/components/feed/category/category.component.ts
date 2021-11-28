import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  loading: boolean = true;
  categories: Category[] = [];
  @Input('category') category: string | undefined;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.loading = true;
    this.categoryService.getAllCategoryData().subscribe((response) => {
      if (response.success) {
        this.categories = response.data;
      }
      this.loading = false;
    });
  }
}
