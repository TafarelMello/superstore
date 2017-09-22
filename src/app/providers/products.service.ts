import { Injectable } from '@angular/core';

const BASEURL = window.location.href;

import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable()
export class ProductsService {
  private products = JSON.parse('./products.json');

  constructor() {}

  // retorna a lista de produtos
  list() {
    return new Promise((resolve, reject) => {
      this.products.map((product, i) => {
        // título no-formato-de-slug
        this.products[i].titleSlug = _.kebabCase(product.name);
        // a rota deste post
        this.products[i].router =
          '/products/' + this.products[i].titleSlug + '/' + this.products[i].id;
        // a url deste post
        this.products[i].url = BASEURL + this.products[i].router;
      });
      resolve(this.products); // resolve a lista de posts
    });
  }

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let product = _.find(products, p => {
          return p.id == id;
        });
        // se tiver post resolve, senão rejeita
        return product ? resolve(product) : reject('product not found');
      });
    });
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, p => {
            return p.name
              .toLocaleLowerCase()
              .includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      });
    });
  }

  scrollTop() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      0
    );
  }
}
