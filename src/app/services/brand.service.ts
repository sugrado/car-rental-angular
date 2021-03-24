import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
<<<<<<< HEAD
import { ResponseModel } from '../models/responseModel';
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands():Observable<ListResponseModel<Brand>> {
<<<<<<< HEAD
    let newPath = this.apiUrl + "brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  updateBrand(brand:Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "brands/update"
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  deleteBrand(brand:Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "brands/delete"
    return this.httpClient.post<ResponseModel>(newPath,brand);
=======
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
  }
}
