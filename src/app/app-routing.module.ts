import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';

const routes: Routes = [
  {path: 'home', component: EquipmentListComponent},
  {path: '', redirectTo: 'home' ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
