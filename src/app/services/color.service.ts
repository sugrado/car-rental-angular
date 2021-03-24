import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
<<<<<<< HEAD
import { ResponseModel } from '../models/responseModel';
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}
<<<<<<< HEAD
  
  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color)
  }

  updateColor(color:Color): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "colors/update"
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

  deleteColor(color:Color): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "colors/delete"
    return this.httpClient.post<ResponseModel>(newPath,color);
=======
  getColors():Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
  }
}
