import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationWidth } from '@angular/common';
import { SaleOnlineService } from 'src/app/service/sale-online.service';

@Component({
  selector: 'app-resultSearch',
  templateUrl: './resultSearch.component.html',
  styleUrls: ['./resultSearch.component.css']
})
export class ResultSearchComponent implements OnInit {
  @Input() orderList = [];
  constructor(private service: SaleOnlineService, private route: Router) { }

  ngOnInit() {
  }
  getOrderList(event) {
    console.log(event);
    console.log('test');
  }
  goToEdit(load) {
    this.service.order = load;
    this.route.navigate(['/edit']);
  }
  delete(id) {
    // const index = this.orderList.findIndex(id);
    // console.log(index);
    console.log(id);

    this.service.deleteOrder(id).subscribe(res => {
      this.orderList.splice(id, 1)
    })
  }
  goToadd() {
    this.service.order = null;
    this.route.navigate(['/add']);
  }
}
