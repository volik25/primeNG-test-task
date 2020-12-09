import { Observable, of } from 'rxjs';
import { Payment } from '../models/payment.model';

export class PaymentService {
    
    private payments: Payment[] = [
        {
            id: 12345678,
            name: 'Талон №1',
            amount: 5000,
            discount: 1000
        }
    ]

    public getPayments(): Observable<Payment[]> {
        return of(this.payments);
    }
}