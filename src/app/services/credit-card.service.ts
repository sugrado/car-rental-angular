import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}
  
  get():Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + "CreditCards/getall";
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
  
  add(card:CreditCard):Observable<ResponseModel>{
    let newPath = this.apiUrl + "CreditCards/add";
    return this.httpClient.post<ResponseModel>(newPath,card)
  }
}
