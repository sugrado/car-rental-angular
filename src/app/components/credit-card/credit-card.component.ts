import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { Car } from 'src/app/models/car';
import { CreditCard } from 'src/app/models/creditCard';
import { Customer } from 'src/app/models/customer';
import { Rent } from 'src/app/models/rent';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  card: CreditCard;
  userId: number = this.userService.getUserId();
  // customer:CustomerDetail;
  customer2: Customer;
  car: Car;

  rental: Rent;

  customerUpdateForm: FormGroup;

  constructor(
    private creditCardService: CreditCardService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    private rentService: RentService,
    private localStorageService: LocalStorageService
  ) {}

  paymentAddForm: FormGroup;

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getCustomer();
  }

  createRentalAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      userId: this.userId,
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvvCode: ['', Validators.required],
    });
  }

  getCustomer() {
    let getted = this.customerService.getCustomer(
      parseInt(this.localStorageService.getItem('CustomerId')!)
    );
    getted.subscribe((response) => {
      this.customer2 = response.data;
    });
  }

  async add() {
    if (
      this.customer2?.findexPoint >=
      parseInt(this.localStorageService.getItem('MFP')!)
    ) {
      if (this.paymentAddForm.valid) {
        this.rentService.add(this.rentService.getRentalInfo()).subscribe(
          (response) => {
            this.toastrService.success(
              'Payment success. You are redirected to the main page.',
              response.message
            );
            this.customerService.addScore(this.customer2).subscribe(
              (response2) => {
                this.toastrService.success(
                  'Congratulations! You have won 100 findex points.'
                );
                this.localStorageService.removeItem('MFP');
              },
              (responseError) => {
                this.toastrService.info(
                  ErrorHelper.getMessage(responseError),
                  'Information'
                );
              }
            );
            this.rentService.clearRentalInfoCache();
            this.localStorageService.removeItem('CustomerId');
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
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
    } else {
      this.toastrService.error(
        "The customer's findex score is not enough.",
        'Error'
      );
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2000);
    }
  }

  saveAndAdd() {
    if (
      this.customer2?.findexPoint >=
      parseInt(this.localStorageService.getItem('MFP')!)
    ) {
      if (this.paymentAddForm.valid) {
        let cardModel = Object.assign({}, this.paymentAddForm.value);
        this.creditCardService.add(cardModel).subscribe(
          (response) => {
            this.rentService.add(this.rentService.getRentalInfo()).subscribe(
              (response2) => {
                this.card = response.data;
                this.toastrService.success(
                  'Payment success. You are redirected to the main page.',
                  response2.message
                );
                this.customerService.addScore(this.customer2).subscribe(
                  (response2) => {
                    this.toastrService.success(
                      'Congratulations! You have won 100 findex points.'
                    );
                    this.localStorageService.removeItem('MFP');
                  },
                  (responseError) => {
                    this.toastrService.info(
                      ErrorHelper.getMessage(responseError),
                      'Information'
                    );
                  }
                );
                this.rentService.clearRentalInfoCache();
                this.localStorageService.removeItem('CustomerId');
                setTimeout(() => {
                  this.router.navigate(['cars']);
                }, 2000);
              },
              (responseError2) => {
                this.toastrService.error(
                  ErrorHelper.getMessage(responseError2),
                  'Error'
                );
              }
            );
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
    } else {
      this.toastrService.error(
        "The customer's findex score is not enough.",
        'Error'
      );
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2000);
    }
  }
}
