import {Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IEquipementDataState } from "./equipment";
import { IEquipmentList } from "../model/iequipment-list";

@Injectable({
    providedIn: 'root'
})
export class EquipmentServiceDriver{
sourceEquipmentSaved: Subject<IEquipementDataState<IEquipmentList>>=new Subject<IEquipementDataState<IEquipmentList>>();
sourceEquipmentSavedAsObservable=this.sourceEquipmentSaved.asObservable();
publishEvent(event: IEquipementDataState<IEquipmentList>){
    this.sourceEquipmentSaved.next(event);
}
}