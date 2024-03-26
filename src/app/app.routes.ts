import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsComponent } from './forms/forms.component';
import { PassportComponent } from './passport/passport.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productlist/:id', component: ProductDetailsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'passport', component: PassportComponent },
  { path: 'todo', component: TodoComponent },
];
