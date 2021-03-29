import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Rent } from '../models/rent';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44350/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'getrentalsdetail';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalById(id:number):Observable<ItemResponseModel<Rent>> {
    let newPath = this.apiUrl + 'getrentaldetails?id='+id;
    return this.httpClient.get<ItemResponseModel<Rent>>(newPath);
  }
  
}
