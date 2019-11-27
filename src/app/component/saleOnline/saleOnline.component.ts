import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SaleOnlineService } from 'src/app/service/sale-online.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-saleOnline',
  templateUrl: './saleOnline.component.html',
  styleUrls: ['./saleOnline.component.css']
})
export class SaleOnlineComponent implements OnInit {
  saleForm: FormGroup;
  productList: Product[] = [];
  orderList = [];
  constructor(private service: SaleOnlineService) { }

  ngOnInit() {
    this.saleForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      productId: new FormControl(null)
    });
    this.service.getProduct().subscribe(res => {
      this.productList = res;
      // console.log(res);
    });
  }
  onSearch(form: FormGroup) {
    let condition = form.getRawValue();
    // console.log(condition);
    condition = { ...condition, ...condition.productId };
    // console.log(condition);

    this.service.getOrder(condition).subscribe(res => {
      // console.log(res);

      this.orderList = res;
    });
  }
  resetForm() {
    this.saleForm.reset();
  }
}
