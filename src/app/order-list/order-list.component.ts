import {Component, OnInit} from '@angular/core';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private policyService: PolicyService) {
  }

  ngOnInit() {
    this.getCoffeeOrders();
  }

  coffeeOrders;
  getCoffeeOrders = () => {
    this.policyService.getCoffeeOrders().subscribe(res => (this.coffeeOrders = res));
  };
  markCompleted = data => {
    this.policyService.updateCoffeeOrder(data);
  };

  deleteOrder = data => {
    this.policyService.deleteCoffeeOrder(data);
  };
}
