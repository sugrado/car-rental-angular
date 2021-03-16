import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getImagesById(id:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "imageuploads/getimagesbycarid?id=" + id
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  
  getCarDetailById(id:number):Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbyid?id=" + id
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }
}