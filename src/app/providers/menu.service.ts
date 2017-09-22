import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable()
export class MenuService {
  // estado do menu
  opened: boolean = false;

  // opções do menu
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    },
    {
      icon: 'fa fa-shopping-cart',
      text: 'Carinho',
      route: '/products'
    }
  ];
  constructor() {}

  //
  open() {
    this.opened = true;
  }

  //
  close() {
    this.opened = false;
  }

  //
  fix() {
    if (document.body.scrollTop > 65) {
      $('section.outer').addClass('margin-fix');
    } else {
      $('section.outer').removeClass('margin-fix');
    }
  }
}
