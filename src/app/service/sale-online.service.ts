import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class SaleOnlineService {
  order: Order;
  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<Product[]>('/api/product');
  }
  getOrder(condition: any) {
    this.removeEmpty(condition);
    const params = new HttpParams({ fromObject: condition });
    console.log(condition);

    return this.http
      .get<Order[]>('/api/orders/queryOrderByCondition', {
        params
      });
  }
  getCustomer() {
    return this.http
      .get<Customer[]>('/api/customer');
  }
  removeEmpty(obj) {
    Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
  }
  editOrder(payload: Order) {
    return this.http
      .put<Order>('/api/orders', payload);
  }

  addOrder(payload: Order) {
    return this.http
      .post<Order>('/api/orders', payload);
  }
  deleteOrder(id) {
    return this.http.delete('/api/orders/' + id);
  }
  getOrderByID(id: string) {
    return this.http.get<Order>('/api/orders/' + id);
  }
}
