import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomePageComponent } from 'app/pages/home-page/home-page.component';
import { ProductsPageComponent } from 'app/pages/products-page/products-page.component';
import { ProductPageComponent } from 'app/pages/product-page/product-page.component';
import { Error404PageComponent } from 'app/pages/error-404-page/error-404-page.component';

const APP_ROUTES: Routes = [
  // home
  {
    path: '',
    component: HomePageComponent
  },
  // products
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'products/:slug/:id',
    component: ProductPageComponent
  },
  // handling 404
  {
    path: '**',
    component: Error404PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
