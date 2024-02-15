import {Component, Input} from '@angular/core';
import {InvoiceInterface} from "../../../shared/models/invoice.interface";

@Component({
  selector: 'tr[app-invoice-row]',
  standalone: true,
  imports: [],
  templateUrl: './invoice-row.component.html'
})
export class InvoiceRowComponent {
  @Input() invoice: InvoiceInterface = {} as InvoiceInterface;
}
