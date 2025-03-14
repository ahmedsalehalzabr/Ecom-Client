import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagnation } from '../shared/Models/Pagnation';
import { IProduct } from '../shared/Models/Product';
import { ICateogry } from '../shared/Models/Category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  product:IProduct[];
  Category: ICateogry[];
  constructor(private shopService:ShopService){}
  ngOnInit(): void {
      this.getAllProduct();
      this.getCategory();
  }
getAllProduct(){
  this.shopService.getProduct().subscribe({
    next:((value:IPagnation)=> {
          this.product=value.data
    })
  })
}
getCategory() {
  this.shopService.getCategory().subscribe({
    next: (value) => {
      this.Category = value;
    },
  });
}
}
