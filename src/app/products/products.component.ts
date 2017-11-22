import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from './products';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'products.component.html'
})

// tslint:disable-next-line:one-line
export class ProductsComponent implements OnInit{
    products: Product[];
    productForm = false;
    editProductForm = false;
    isNewForm: boolean;
    newProduct: any = {};
    editedProduct: any = {};

   constructor(private _productService: ProductService) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.getProducts();
    }

    getProducts() {
      this.products = this._productService.getProductsFromData();
    }

    showEditProductForm(products: Product) {
      if (!products) {
        this.productForm = false;
        return;
      }
      this.editProductForm = true;
      this.editedProduct = clone(products);
    }

    showAddProductForm() {
      // resets form if edited product
      if (this.products.length) {
        this.newProduct = {};
      }
      this.productForm = true;
      this.isNewForm = true;
    }

    saveProduct(products: Product) {
      if (this.isNewForm) {
        // add a new product
        this._productService.addProduct(products);
      }
      this.productForm = false;
    }

    removeProduct(products: Product) {
      this._productService.deleteProduct(products);
    }

    updateProduct() {
      this._productService.updateProduct(this.editedProduct);
      this.editProductForm = false;
      this.editedProduct = {};
    }

    cancelNewProduct() {
      this.newProduct = {};
      this.productForm = false;
    }

    cancelEdits() {
      this.editedProduct = {};
      this.editProductForm = false;
    }

  }

