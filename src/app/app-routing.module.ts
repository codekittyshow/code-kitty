import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-posts',
    component: MyPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
