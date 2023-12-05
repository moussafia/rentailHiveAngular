import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap , throwError } from 'rxjs';
import {IEquipmentList} from './iequipment-list';

@Injectable({
  providedIn: 'root'
})
export class EquipmentListService {
  private equipmentListUrl="http://localhost:8080/api/v1/equipment";

  constructor(private http: HttpClient) { }

  getEquipmentList(): Observable<IEquipmentList[]>{
    return this.http.get<IEquipmentList[]>(this.equipmentListUrl).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
      console.error(errorMessage);
      return throwError(() => errorMessage);
  }

}
