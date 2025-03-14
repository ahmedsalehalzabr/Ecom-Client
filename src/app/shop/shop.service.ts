import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagnation } from '../shared/Models/Pagnation';
import { ICateogry } from '../shared/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL = 'https://localhost:7184/api/';

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<IPagnation>(this.baseURL+"Products/get-all")
  }
  getCategory(){
    return this.http.get<ICateogry[]>(this.baseURL+"Categories/get-all")
  }
}
