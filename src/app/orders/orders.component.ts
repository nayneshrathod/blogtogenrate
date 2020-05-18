import {Component, OnInit} from '@angular/core';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  constructor(public policyService: PolicyService) {
  }

  ngOnInit(): void {
  }

  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
  };


    onSubmit() {
    this.policyService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.policyService.form.value;

    this.policyService.createCoffeeOrder(data)
      .then(res => { console.log(data)
        /*do something here....
        maybe clear the form or give a success message*/
      });
  }
}
