import { Component } from '@angular/core';
import {InvoiceRowComponent} from "./components/invoice-row/invoice-row.component";
import {InvoicesService} from "./invoices.service";
import {
  InvoiceInterface,
  InvoiceServiceInterfae,
  InvoicesPaginationInterface
} from "../shared/models/invoice.interface";
import {catchError, firstValueFrom, of} from "rxjs";
import {FilterFormComponent} from "./components/filter-form/filter-form.component";
import {PaginationComponent} from "./components/pagination/pagination.component";

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [InvoiceRowComponent, FilterFormComponent, PaginationComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {

  invoices: InvoiceInterface[] = [];
  pagination: InvoicesPaginationInterface = {
    totalPages: 0,
    currentPage: 0,
    nextPage: null,
    prevPage: null
  };
  isLoading = false;
  startDate: string = '';
  endDate: string = '';

  constructor(private invoiceService: InvoicesService) { }

  async ngOnInit() {
    await this.loadInvoices();
  }

  async loadPage(page: number) {
    await this.loadInvoices(page);
  }

  private async loadInvoices(page: number = 1, startDate: string = '', endDate: string = '') {
    this.isLoading = true;
    try {
      const data = await firstValueFrom(
        this.invoiceService.getInvoices(page, startDate, endDate).pipe(
          catchError(error => {
            console.error('Error occurred:', error);
            return of({ invoices: [], pagination: this.pagination });
          })
        )
      );
      this.invoices = data.invoices;
      this.pagination = data.pagination;
    } finally {
      this.isLoading = false;
    }
  }


  async onSearchClick({startDate, endDate}: { startDate: string, endDate: string }) {
    this.startDate = startDate;
    this.endDate = endDate;
    await this.loadInvoices(1, startDate, endDate);
  }

  async onPageChange({page}: { page: number }) {
    await this.loadInvoices(page, this.startDate, this.endDate);
  }
}
