import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  cards: CreditCard[] = [];
  constructor(
    private creditCardService: CreditCardService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router : Router
  ) {}
  paymentAddForm: FormGroup;
  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvvCode: ['', Validators.required],
    });
  }

  add() {
    if (this.paymentAddForm.valid) {
      let carModel = Object.assign({}, this.paymentAddForm.value);
      this.creditCardService.add(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Payment success. You are redirected to the main page.');
          setTimeout(() => {
            this.router.navigate(['cars']);
          }, 2000);
        },
        (responseError) => {
          this.toastrService.error(ErrorHelper.getMessage(responseError), "Error");
        }
      );
    } else {
      this.toastrService.error('Please fill in the blanks.', 'Error');
    }
    
    
  }
}
