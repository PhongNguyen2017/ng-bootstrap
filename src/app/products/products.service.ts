import { Injectable } from '@angular/core';
import { Product } from './products';
import { PRODUCT_ITEMS } from './products_data';
import { findIndex } from 'lodash';

@Injectable()
export class ProductService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addProduct(products: Product) {
    this.pItems.push(products);
    console.log(this.pItems);
  }

  updateProduct(products: Product) {
    const index = findIndex(this.pItems, (p: Product) => {
      return p.id === products.id;    // so sanh khi cung type
    });
    this.pItems[index] = products;
  }

  deleteProduct(products: Product) {
    this.pItems.splice(this.pItems.indexOf(products), 1);
    console.log(this.pItems);
  }


getProductsFromService(): Product[] {
    return [{
    id: 1,
    name: 'Scissors',
    description: 'use this to cut stuff',
    price: 4.99
  },

  {
    id: 2,
    name: 'Steak Knives',
    description: 'use this to eat food with',
    price: 10.99
  },

  {
    id: 3,
    name: 'Shot Glass',
    description: 'use this to take shots',
    price: 5.99
  }];
  }
}
