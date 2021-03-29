import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  apiUrl = 'https://localhost:44350/api/CreditCards/';
  constructor(private httpClient: HttpClient) {}
  
  get():Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

  getByUserId(userId:number):Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + "getbyuserid?userId=" + userId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
  
  add(card:CreditCard):Observable<ItemResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ItemResponseModel<CreditCard>>(newPath,card)
  }

  delete(card:CreditCard):Observable<ItemResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ItemResponseModel<CreditCard>>(newPath,card)
  }
}
