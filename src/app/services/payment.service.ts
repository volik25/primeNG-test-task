import { Observable, of } from 'rxjs';
import { IPayment, PaymentsNames } from '../models/payment.model';

export class PaymentService {
    
    private names: string[] = PaymentsNames;
    private payments: IPayment[] = [];

    public getPayments(): Observable<IPayment[]> {
        return of(this.generatePayments());
    }

    private generatePayments() {
        for (let i = 1; i < 21; i++) {
            this.payments.push({
                id: this.generateId(),
                name: this.generateNames(),
                total: this.generateTotalDiscount(),
                discount: this.generateTotalDiscount()
            })
        }
        return this.payments;
    }

    private generateTotalDiscount() {
        return Math.floor(Math.random()*10000);
    }

    private generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    private generateNames() {
        return this.names[Math.floor(Math.random()*Math.floor(5))];
    }
}