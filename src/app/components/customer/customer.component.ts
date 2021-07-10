import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: CustomerDetail[] = [];
  dataLoaded = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }
}
