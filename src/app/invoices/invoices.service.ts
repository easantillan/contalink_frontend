import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {InvoiceServiceInterfae} from "../shared/models/invoice.interface";
@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) {
  }

  getInvoices(page = 1, start_date='', end_date=''): Observable<InvoiceServiceInterfae> {
    return this.http.get<InvoiceServiceInterfae>(`http://localhost:3000/V1/invoices?page=${page}&start_date=${start_date}&end_date=${end_date}`);
  }
}
