import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InvoicesPaginationInterface} from "../../../shared/models/invoice.interface";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  @Input() pagination: InvoicesPaginationInterface = {
    totalPages: 0,
    currentPage: 0,
    nextPage: null,
    prevPage: null
  };

  @Output() pageChange = new EventEmitter<{ page: number }>()

  constructor() {
  }

  onPageClick(page: number | null) {

    if (!page) {
      return;
    }

    this.pageChange.emit({page});
  }
}
