import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Rent } from '../models/rent';
=======
import { ListResponseModel } from '../models/listResponseModel';
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<Rental>> {
<<<<<<< HEAD
    let newPath = this.apiUrl + 'rentals/getrentalsdetail';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
=======
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
  }

  getRentalById(id:number):Observable<ItemResponseModel<Rent>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetails?id='+id;
    return this.httpClient.get<ItemResponseModel<Rent>>(newPath);
  }
  
}
