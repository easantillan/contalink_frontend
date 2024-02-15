import { Component } from '@angular/core';
import {InvoicesComponent} from "./invoices/invoices.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contalink_frontend';
}
