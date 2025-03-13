import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagnation } from '../shared/Models/Pagnation';
import { IProduct } from '../shared/Models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  product:IProduct[]
  constructor(private shopService:ShopService){}
  ngOnInit(): void {
      this.getAllProduct();
  }
getAllProduct(){
  this.shopService.getProduct().subscribe({
    next:((value:IPagnation)=> {
          this.product=value.data
    })
  })
}
}
