import { Component, OnInit } from '@angular/core';

import { MenuService } from 'app/providers/menu.service';
import { ProductsService } from './../../providers/products.service';
import { CartService } from './../../providers/cart.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.sass']
})
export class ProductsPageComponent implements OnInit {
  product: any = {};
  constructor(
    public products: ProductsService,
    public cart: CartService,
    public menu: MenuService
  ) {}

  ngOnInit() {}
}
