import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css'],
})
export class DeleteAccountComponent implements OnInit {
  user: User;
  userDeleteForm: FormGroup;
  userId: number;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
    this.createUserDeleteForm();
    this.getUserById();
  }

  getUserById() {
    this.userService.getById(this.userId).subscribe((response) => {
      this.user = response.data;
    });
  }

  createUserDeleteForm() {
    this.userDeleteForm = this.formBuilder.group({
      userId2: this.userId,
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Account deleted');
        setTimeout(() => {
          this.logOut();
        }, 1000);
      },
      (responseError) => {
        this.toastrService.error(
          ErrorHelper.getMessage(responseError),
          'Error'
        );
      }
    );
  }

  logOut() {
    this.localStorageService.removeItem('token');
    this.toastrService.success('Successfuly log out.');
    this.router.navigate(['']);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
