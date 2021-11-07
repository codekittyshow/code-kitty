import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { FeedComponent } from './components/feed/feed.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { Page404Component } from './components/page404/page404.component';
import { PostCardComponent } from './components/feed/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/feed/category/category.component';
import { PostFormComponent } from './components/feed/post-form/post-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    Page404Component,
    PostCardComponent,
    CategoryComponent,
    PostFormComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
