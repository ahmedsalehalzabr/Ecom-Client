import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagnation } from '../shared/Models/Pagnation';
import { ICateogry } from '../shared/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL = 'https://localhost:7184/api/';

  constructor(private http:HttpClient) { }
  getProduct(CategoryId?:number){
    let parm=new HttpParams();
    if(CategoryId){
      parm=parm.append("categoryId",CategoryId)
    }
    return this.http.get<IPagnation>(this.baseURL+"Products/get-all",{params:parm})
  }
  getCategory(){
    return this.http.get<ICateogry[]>(this.baseURL+"Categories/get-all")
  }
}
