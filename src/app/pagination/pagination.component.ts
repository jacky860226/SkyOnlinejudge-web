import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges, OnInit  {

  @Output() pageChange = new EventEmitter<number>(true);
   _page=1;
  @Input('page')
  set page(_page) {
    _page = parseInt(_page, 10) || 1;
    this._page = _page;
  }
  @Input() Items=1;

  constructor() { }
  
  ngOnChanges() {
    
  }
  ngOnInit(){
    
  }

  onPageChange(page: number){
    this.pageChange.emit(page);
  }

}
