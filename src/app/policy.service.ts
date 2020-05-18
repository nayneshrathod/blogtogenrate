import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Policy} from 'src/app/policy.model';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) {
  }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });
  //
  // getPolicies() {
  //   return this.firestore.collection('policies').snapshotChanges();
  // }
  //
  // createPolicy(policy: Policy) {
  //   return this.firestore.collection('policies').add(policy);
  // }
  //
  // updatePolicy(policy: Policy) {
  //   delete policy.id;
  //   this.firestore.doc('policies/' + policy.id).update(policy);
  // }
  //
  // deletePolicy(policyId: string) {
  //   this.firestore.doc('policies/' + policyId).delete();
  // }
  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection('coffeeOrders').snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .delete();
  }

  updateCoffeeOrder(data) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .set({completed: true}, {merge: true});
  }
}
