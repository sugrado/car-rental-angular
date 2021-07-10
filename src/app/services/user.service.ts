import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { UpdateModel } from '../models/updateModel';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:44350/api/users/';
  jwtHelper: JwtHelperService = new JwtHelperService();
  token = this.localStorageService.getItem('token');
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  updateUser(updateModel: UpdateModel) {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ItemResponseModel<TokenModel>>(
      newPath,
      updateModel
    );
  }

  deleteUser(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }

  getById(id: number): Observable<ItemResponseModel<User>> {
    let newPath = this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }

  getUserId() {
    let userId = parseInt(
      this.jwtHelper.decodeToken(this.token?.toString())[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ]
    );
    return userId;
  }
}
