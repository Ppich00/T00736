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

    this.orderForm = new FormGroup({
      orderId: new FormControl(0),
      amount: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      orderDate: new FormControl(new Date(), Validators.required),
      product: new FormControl('', Validators.required),
      status: new FormControl(''),
      total: new FormControl('')
    })
    this.service.getProduct().subscribe(res => this.product = res.map(val => {
      return {
        ...val, productDesc: null
      }

    }));
    this.service.getCustomer().subscribe(res => {

      this.customerList = res.map(val => {
        return { ...val, address: null, email: null, tel: null };
      });
      // console.log(res);
    })
    if (this.service.order) {
      this.service.getOrderByID(this.service.order.orderId.toString()).subscribe(res => {
        // console.log(res.customer);
        this.orderForm.patchValue({
          ...res, orderDate: new Date
            (res.orderDate), status: res.status === "Y" ? true : false
        })
        // this.orderForm.get('product').setValue(res.product);
        // this.orderForm.get('customer').setValue(this.service.order.customer);

      });
      // console.log(orderService);


    }
  }
  onSumit(form: FormGroup) {

    if (form.valid) {
      let data = form.getRawValue();
      data = { ...data, status: data.status ? "Y" : "N" }
      if (this.service.order) {
        // console.log(data);

        this.service.editOrder(data).subscribe(res => {
          // console.log(res)
        }
        );
      } else {
        this.service.addOrder(data).subscribe(res => {
          // console.log(res);
        });
      }

    }
  }
  resetForm() {
    this.orderForm.reset();
  }
}
