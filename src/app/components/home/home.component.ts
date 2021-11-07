import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        //console.log(user);

        const { uid, email, displayName, photoURL } = user;

        if (email && displayName && photoURL) {
          this.userService
            .addUser({
              uid,
              email,
              displayName,
              photoURL,
            })
            .subscribe(
              (res) => {
                console.info('User Added', res);
              },
              (e) => {
                console.error('Failed to add user', e.message);
              }
            );
        } else {
          console.info('Undefined objects are there');
        }
        this.router.navigate(['/feed']);
      }
    });
  }

  login() {
    this.authService.login();
  }
}
