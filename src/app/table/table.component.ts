import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../models/payment.model';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  public payments: Payment[] = [];

  public cols: any[];
  public _selectedColumns: any[];
  
  constructor(private paymentService: PaymentService) {
    this.cols = [
      { field: 'id', header: 'Номер' },
      { field: 'name', header: 'Название' },
      { field: 'total', header: 'Сумма' },
      { field: 'discount', header: 'Скидка' }
    ];
    this._selectedColumns = this.cols;
  }

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe(payments => {
      this.payments = payments;
    })
  }

}
