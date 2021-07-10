import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  backClicked() {
    this._location.back();
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Information');
          this.localStorageService.setItem('token', response.data.token);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          this.router.navigate(['']);
        },
        (responseError) => {
          this.toastrService.error(
            ErrorHelper.getMessage(responseError),
            'Error'
          );
        }
      );
    } else {
      this.toastrService.error('Please fill in the blanks.', 'Error');
    }
  }
}
