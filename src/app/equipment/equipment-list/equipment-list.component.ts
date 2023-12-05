import { Component, OnInit } from '@angular/core';
import { IEquipmentList } from './iequipment-list';
import { EquipmentListService } from './equipment-list.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.css'
})
export class EquipmentListComponent implements OnInit {
  private equipmentList: IEquipmentList[]=[];
  private sub!:Subscription;
  private errorMessage='';
  constructor(private equipmentListService: EquipmentListService){}
  ngOnInit(): void {
      this.sub = this.equipmentListService.getEquipmentList().subscribe({
        next: data => {
          this.equipmentList = data;
          console.log(this.equipmentList);
        },
        error: err => this.errorMessage = err
      })
  }

}
