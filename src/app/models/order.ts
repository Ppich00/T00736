import { Customer } from './customer';

export interface Order {
    orderId: number;
    customer: Customer;
    amount: number;
    total: number;
    orderDate: Date;
    status: string;

}
