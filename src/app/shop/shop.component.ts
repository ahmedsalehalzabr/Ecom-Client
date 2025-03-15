import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
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
  CategoryId:number;
  SortSelected:string

  constructor(private shopService:ShopService){}
  ngOnInit(): void {
      this.getAllProduct();
      this.getCategory();
  }
getAllProduct(){
  this.shopService.getProduct(this.CategoryId,this.SortSelected,this.search).subscribe({
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
SelectedId(categoryid:number){
  this.CategoryId=categoryid
  this.getAllProduct();
}

// Sorting by price
SortingOption=[
  {name:'Price',value:'Name'},
  {name:'Price:min-max',value:'PriceAce'},
  {name:'Price:max-min',value:'PriceDce'}
]
SortingByPrice(sort:Event){
this.SortSelected=(sort.target as HTMLInputElement).value
this.getAllProduct()
}

//filtering by wprd
search:string
OnSearch(Search:string) {
  this.search=Search
  this.getAllProduct()
}

@ViewChild('search') searchInput:ElementRef;
@ViewChild('SortSelected') selected:ElementRef;

//Rest all value
ResetValue(){
this.search="";
this.SortSelected = this.SortingOption[0].value;
this.CategoryId=0;

this.searchInput.nativeElement.value = '';

this.selected.nativeElement.selectedIndex = 0;

this.getAllProduct()

}

}
