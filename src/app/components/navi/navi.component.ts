import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  user: User;
  
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private router: Router,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    if(this.isAuth()){
      this.getUserById();
    }
  }

  getUserById() {
    this.userService.getById(this.userService.getUserId()).subscribe((response) => {
      this.user = response.data;
    });
  }

  isAuth() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.localStorageService.removeItem('token');
    this.toastrService.success('Successfuly log out.');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
