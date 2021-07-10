import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDetail';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44350/api/customers/';
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomer(customerId: number): Observable<ItemResponseModel<Customer>> {
    let newPath = this.apiUrl + 'getbyid?id=' + customerId;
    return this.httpClient.get<ItemResponseModel<Customer>>(newPath);
  }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetail>> {
    let newPath = this.apiUrl + 'getcustomersdetail';
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
  }

  getCustomerDetailsById(
    customerId: number
  ): Observable<ItemResponseModel<CustomerDetail>> {
    let newPath = this.apiUrl + 'getcustomerdetail?customerId=' + customerId;
    return this.httpClient.get<ItemResponseModel<CustomerDetail>>(newPath);
  }

  addScore(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'updatefindex';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }
}
