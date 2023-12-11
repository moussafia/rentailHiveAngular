import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { IEquipmentList } from '../../model/iequipment-list';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { EquipmentService } from '../../services/equipment.service';
import { DataState, IEquipementDataState } from '../../state/equipment';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentServiceDriver } from '../../state/equipment.driver.service';

@Component({
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.css'
})
export class EquipmentListComponent implements OnInit {
  equipmentList$?:IEquipementDataState<IEquipmentList[]>;
  pageTotal:number = 1;
  currentPage:number = 0;
  readonly dataState = DataState;
  constructor(private equipmentService: EquipmentService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private equipmentDriverService: EquipmentServiceDriver){}
 
  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(params=>{
      this.currentPage = params['page'] - 1 || 0;
    })
  this.equipmentDriverService.sourceEquipmentSavedAsObservable.subscribe({
    next:response=>{
      if(response.data)
      this.equipmentList$?.data?.push(response.data);
    }
  });
    this.getEquipment();

  }
  getEquipment():void{
    this.equipmentService.getAllEquipment(this.currentPage).pipe(
      map(data => {
        const numberTotalPage = data.headers.get("X-Total-Page");
        if(numberTotalPage)  this.pageTotal =parseInt(numberTotalPage);
        return ({dataState: this.dataState.LOADED, data: data.body || []});
      }),
      startWith({dataState: this.dataState.LOADING}),
      catchError(error=> of({dataState: this.dataState.ERROR, error: error.message }))
    ).subscribe({
      next: data => this.equipmentList$=data
    });
  }
  getEquipmentPage(pageNumber: number):void {
    this.router.navigate(['home'],{queryParams:{page: pageNumber}})
    this.currentPage = pageNumber - 1;
    this.getEquipment();
  }


}
