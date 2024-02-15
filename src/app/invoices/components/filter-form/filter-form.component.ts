import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter-form.component.html'
})
export class FilterFormComponent {
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Output() searchClick = new EventEmitter<{ startDate: string, endDate: string }>()

  constructor() {
  }

  onSubmit() {
    if (!this.startDate && this.endDate) {
      this.startDate = this.endDate;
    }

    if (!this.endDate && this.startDate) {
      this.endDate = this.startDate;
    }

    if (this.isStartDateGreaterThanEndDate()) {
      alert('Start date cannot be greater than end date');
      return;
    }

    this.searchClick.emit({startDate: this.startDate, endDate: this.endDate});
  }

  isStartDateGreaterThanEndDate(): boolean {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return start > end;
  }
}
