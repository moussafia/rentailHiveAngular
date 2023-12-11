import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage:number = 1;
  @Input() pageTotal:number = 1;
  @Output() currentPageEventEmitter : EventEmitter<number> = new EventEmitter<number>();
  onChangePage(pageNumber: number):void{
    this.currentPage = pageNumber;
    this.currentPageEventEmitter.emit(this.currentPage);
  }
  generateNumberArray(count: number):number[]{
    return Array(count).fill(0).map((_, index) => index + 1);
  }
  previousPage() {
    this.currentPage--;
    this.currentPageEventEmitter.emit(this.currentPage);
  }
  nextPage(){
    this.currentPage++;
    this.currentPageEventEmitter.emit(this.currentPage);
  }
}
