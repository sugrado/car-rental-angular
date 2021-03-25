import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrand?id='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolor?id='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getImagesById(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'imageuploads/getimagesbycarid?id='+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetailById(id: number): Observable<ItemResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }

  getCarsByMultiId(brandId:number, colorId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbymultipleid?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  deleteCar(car:Car): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "cars/delete"
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  addCar(car:Car): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "cars/add"
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  updateCar(car:Car): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "cars/update"
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}