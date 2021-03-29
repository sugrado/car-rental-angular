import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { Car } from 'src/app/models/car';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { Rent } from 'src/app/models/rent';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentService } from 'src/app/services/rent.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  car: Car;
  customers: CustomerDetail[] = [];
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  rentAddForm: FormGroup;

  constructor(
    private carService: CarService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService,
    private rentService: RentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetails(params['id']);
        this.carId = params['id'];
      }
      this.getCustomerDetails();
    });
    this.createRentalAddFrom()
  }

  carId!: number;

  isAuth() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  createRentalAddFrom() {
    this.rentAddForm = this.formBuilder.group({
      caridisi: ['', Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  processRental() {
    if (this.rentAddForm.valid) {
      let newRental: Rent = {
        rentDate: this.rentDate,
        returnDate: this.returnDate,
        carId: this.car.id,
        customerId: this.customerId,
      };
      this.rentService.clearRentalInfoCache();

      this.localStorageService.setItem('CustomerId', this.customerId.toString());
      this.localStorageService.setItem('Rental', JSON.stringify(newRental));

      this.toastrService.success(
        'Process success. You are redirecting to payment page.'
      );
      setTimeout(() => {
        this.router.navigate(['/payments/add']);
      }, 2000);
    }else{
      this.toastrService.error("Please fill in the blanks.", "Error");
    }
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
}
