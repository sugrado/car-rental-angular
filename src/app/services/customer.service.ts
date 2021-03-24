import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
<<<<<<< HEAD
import { CustomerDetail } from '../models/customerDetail';
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getCustomers():Observable<ListResponseModel<Customer>> {
<<<<<<< HEAD
    let newPath = this.apiUrl + "customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  
  getCustomerDetails():Observable<ListResponseModel<CustomerDetail>>{
    let newPath = this.apiUrl + "customers/getcustomersdetail";
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
=======
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
  }
}
