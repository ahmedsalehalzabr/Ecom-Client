import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shared/Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct
  constructor(private shopService:ShopService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.shopService.getProductDetails(parseInt(this.route.snapshot.paramMap.get('id'))).
    subscribe({
      next:((value:IProduct)=> {
        this.product=value
      })
    })
  }

}
