import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { Rent } from 'src/app/models/rent';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentService } from 'src/app/services/rent.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  rentAddForm: FormGroup;
  rental: Rent;
  car: Car;
  customers: CustomerDetail[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private rentService: RentService,
    private carService: CarService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetails(params['id']);
        this.carId = params['id'];
      }
      this.getCustomerDetails();
    });
    this.createRentalAddFrom();
  }

  carId!: number;

  createRentalAddFrom() {
    this.rentAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  getCarDetails(id: number) {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.car = response.data;
    });
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
    });
  }

  setRentDate() {
    var today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0, 10);
  }

  setReturnDate() {
    var today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0, 10);
  }

  add() {
    console.log(this.rentAddForm);
    if (this.rentAddForm.valid) {
      let rentModel = Object.assign({}, this.rentAddForm.value);
      this.rentService.add(rentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'You are redirecting to payment page.');
          setTimeout(() => {
            this.router.navigate(['payments/add']);
          }, 3000);
          
        },
        (responseError) => {
          if (responseError.error.Errors !== undefined) {
            if (responseError.error.Errors.length > 0) {
              for (let i = 0; i < responseError.error.Errors.length; i++) {
                this.toastrService.error(
                  responseError.error.Errors[i].ErrorMessage,
                  'Verification error'
                );
              }
            }
          }
          else{
            this.toastrService.error(responseError.error.message, 'Error');
          }
        }
      );
    } else {
      this.toastrService.error('Please fill in the blanks.', 'Error');
    }
  }

  /*
   * Payment page
  getRentalDetailsById(id: number) {
    this.rentalService.getRentalById(id).subscribe((response) => {
      this.rental = response.data
      console.log(this.rental);
    });
  }
  */
}
