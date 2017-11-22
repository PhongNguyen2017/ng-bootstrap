import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { LhtComponent } from './lht/lht.component';   // file TS
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LhtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
