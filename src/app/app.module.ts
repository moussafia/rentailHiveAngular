import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipmentListComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
