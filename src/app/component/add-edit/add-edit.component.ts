import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SaleOnlineService } from 'src/app/service/sale-online.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  product: Product[] = [];
  orderForm: FormGroup;
  customerList: Customer[] = [];
  th;

  constructor(public service: SaleOnlineService) { }

  ngOnInit() {
    console.log();

    this.orderForm = new FormGroup({
      orderId: new FormControl(0),
      amount: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      orderDate: new FormControl(new Date(), Validators.required),
      product: new FormControl('', Validators.required),
      status: new FormControl(''),
      total: new FormControl('')
    })
    this.service.getProduct().subscribe(res => this.product = res);
    this.service.getCustomer().subscribe(res => {

      this.customerList = res;
      console.log(res);
    })
    if (this.service.order) {
      const orderService = this.service.order;
      console.log(orderService);

      this.orderForm.patchValue({
        ...orderService, orderDate: new Date
          (orderService.orderDate), status: orderService.status === "Y" ? true : false
      })
    }
  }
  onSumit(form: FormGroup) {

    if (form.valid) {
      let data = form.getRawValue();
      data = { ...data, status: data.status ? "Y" : "N" }
      if (this.service.order) {
        console.log(data);

        this.service.editOrder(data).subscribe(res => console.log(res)
        );
      } else {
        this.service.addOrder(data).subscribe(res => {
          console.log(res);
        });
      }

    }
  }
  resetForm() {
    this.orderForm.reset();
  }
}
