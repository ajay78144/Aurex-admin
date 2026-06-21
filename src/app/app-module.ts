import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Layout */
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Sidebar } from './shared/sidebar/sidebar';
import { Navbar } from './shared/navbar/navbar';

/* Auth */
import { Login } from './pages/auth/login/login';

/* Dashboard */
import { Dashboard } from './pages/dashboard/dashboard';

/* Users */
import { UserList } from './pages/users/user-list/user-list';

/* Products */
import { ProductList } from './pages/products/product-list/product-list';
import { ProductAdd } from './pages/products/product-add/product-add';
import { ProductEdit } from './pages/products/product-edit/product-edit';

/* Categories */
import { CategoryList } from './pages/categories/category-list/category-list';
import { CategoryAdd } from './pages/categories/category-add/category-add';

/* Orders */
import { OrderList } from './pages/orders/order-list/order-list';

/* Reviews */
import { ReviewList } from './pages/reviews/review-list/review-list';

/* Coupons */
import { CouponList } from './pages/coupons/coupon-list/coupon-list';
import { CouponAdd } from './pages/coupons/coupon-add/coupon-add';

/* Banners */
import { BannerList } from './pages/banners/banner-list/banner-list';

/* Contacts */
import { ContactList } from './pages/contacts/contact-list/contact-list';
import { CategoryEdit } from './pages/categories/category-edit/category-edit';
import { BannerAdd } from './pages/banners/banner-add/banner-add';
import { BannerEdit } from './pages/banners/banner-edit/banner-edit';
import { CartList } from './pages/cart/cart-list/cart-list';

@NgModule({
  declarations: [

    App,

    Login,

    AdminLayout,
    Sidebar,
    Navbar,

    Dashboard,

    UserList,

    ProductList,
    ProductAdd,
    ProductEdit,

    CategoryList,
    CategoryAdd,

    OrderList,

    ReviewList,

    CouponList,
    CouponAdd,

    BannerList,

    ContactList,
      CategoryEdit,
      BannerAdd,
      BannerEdit,
      CartList

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],

  providers: [
    provideBrowserGlobalErrorListeners()
  ],

  bootstrap: [App]

})
export class AppModule { }