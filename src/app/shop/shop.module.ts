import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShopComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
