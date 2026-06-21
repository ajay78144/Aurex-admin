import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './pages/auth/login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Dashboard } from './pages/dashboard/dashboard';

import { UserList } from './pages/users/user-list/user-list';

import { ProductList } from './pages/products/product-list/product-list';
import { ProductAdd } from './pages/products/product-add/product-add';
import { ProductEdit } from './pages/products/product-edit/product-edit';

import { CategoryList } from './pages/categories/category-list/category-list';
import { CategoryAdd } from './pages/categories/category-add/category-add';
import { CategoryEdit } from './pages/categories/category-edit/category-edit';

import { OrderList } from './pages/orders/order-list/order-list';

import { ReviewList } from './pages/reviews/review-list/review-list';

import { CouponList } from './pages/coupons/coupon-list/coupon-list';
import { CouponAdd } from './pages/coupons/coupon-add/coupon-add';

import { BannerList } from './pages/banners/banner-list/banner-list';
import { BannerAdd } from './pages/banners/banner-add/banner-add';
import { BannerEdit } from './pages/banners/banner-edit/banner-edit';

import { ContactList } from './pages/contacts/contact-list/contact-list';

import { CartList } from './pages/cart/cart-list/cart-list';

import { adminGuard } from './guards/admin-guard';

const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: '',
    component: AdminLayout,
    canActivate: [adminGuard],

    children: [

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'users',
        component: UserList
      },

      {
        path: 'products',
        component: ProductList
      },

      {
        path: 'products/add',
        component: ProductAdd
      },

      {
        path: 'products/edit/:id',
        component: ProductEdit
      },

      {
        path: 'categories',
        component: CategoryList
      },

      {
        path: 'categories/add',
        component: CategoryAdd
      },

      {
        path: 'categories/edit/:id',
        component: CategoryEdit
      },

      {
        path: 'orders',
        component: OrderList
      },

      {
        path: 'reviews',
        component: ReviewList
      },

      {
        path: 'cart',
        component: CartList
      },

      {
        path: 'coupons',
        component: CouponList
      },

      {
        path: 'coupons/add',
        component: CouponAdd
      },

      {
        path: 'banners',
        component: BannerList
      },

      {
        path: 'banners/add',
        component: BannerAdd
      },

      {
        path: 'banners/edit/:id',
        component: BannerEdit
      },

      {
        path: 'contacts',
        component: ContactList
      }

    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}