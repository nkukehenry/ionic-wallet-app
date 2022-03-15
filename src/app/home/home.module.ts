import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HomeHeaderComponent,
    TransactionsComponent,
    AlertModalComponent,
    CategoriesComponent
  ]
})
export class HomePageModule { }
