import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipmentCardsComponent } from './equipment/equipment-list/equipment-cards/equipment-cards.component';
import { PaginationComponent } from './equipment/equipment-list/pagination/pagination.component';
import { ModalAddEquipmentComponent } from './components/navbar/modal-add-equipment/modal-add-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipmentListComponent,
    SearchComponent,
    EquipmentCardsComponent,
    PaginationComponent,
    ModalAddEquipmentComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
