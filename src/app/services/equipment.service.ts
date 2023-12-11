import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEquipmentList } from "../model/iequipment-list";
import { IEquipmentPost } from "../model/equipment";
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  host:string = "http://localhost:8080";
  constructor(private http:HttpClient){}
  getAllEquipment(page:number): Observable<HttpResponse<IEquipmentList[]>>{
    return this.http.get<IEquipmentList[]>(`${this.host}/api/v1/equipment?page=${page}`,
    {
      observe: 'response'
    });
  }
  post(equipment:IEquipmentPost):Observable<HttpResponse<IEquipmentList>>{
    return this.http.post<IEquipmentList>(`${this.host}/api/v1/equipment`, equipment,
    {
      observe: 'response'
    });
  }

}
