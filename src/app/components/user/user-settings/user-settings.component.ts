import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { PasswordModel } from 'src/app/models/passwordModel';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {
  userUpdateForm: FormGroup;
  passUpdateForm: FormGroup;
  user: User;
  userEmail: string;
  @Input() userId: number;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.userId = params['userId'];
        this.userEmail = this.user?.email;
      }
    });
    this.createPassUpdateForm();
    this.createUserUpdateForm();
    this.getUser();
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      id: this.userId,
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      status: [true],
    });
  }

  getUser() {
    if (this.userId) {
      this.userService.getById(this.userId).subscribe(
        (response) => {
          this.user = response.data;
        },
        (responseError) => {
          this.toastrService.error(
            ErrorHelper.getMessage(responseError),
            'Error'
          );
        }
      );
    }
  }

  createPassUpdateForm() {
    this.passUpdateForm = this.formBuilder.group({
      userEmail: this.userEmail,
      oldPass: ['', Validators.required],
      newPass: ['', Validators.required],
    });
  }

  updateProfile() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      this.userService.updateUser(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Updated successfully');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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

  updatePass() {
    if (this.passUpdateForm.valid) {
      let passModel: PasswordModel = Object.assign(
        {},
        this.passUpdateForm.value
      );
      this.authService.changePassword(passModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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
