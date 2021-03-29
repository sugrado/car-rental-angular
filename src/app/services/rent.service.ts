import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { Rent } from '../models/rent';
import { ResponseModel } from '../models/responseModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44350/api/rentals/';
  constructor(private httpClient: HttpClient, private localStorageService : LocalStorageService) {}

  add(rent:Rent):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add", rent)
  }

  getRentalInfo(){
    let rent:Rent = JSON.parse(this.localStorageService.getItem("Rental")!)

    let newRental:Rent={
      rentDate : rent.rentDate,
      returnDate :rent.returnDate,
      carId : rent.carId,
      customerId : rent.customerId
    }
    return newRental;
  }

  clearRentalInfoCache(){
    this.localStorageService.removeItem("Rental");
  }
}
