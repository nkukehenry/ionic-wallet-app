import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [];
  constructor() {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactions = [
      {
        product: 'MTN Mobile money',
        date: 'Jul 10th,21',
        story: '$56 to Mukasa Eddie',
        flow: 0
      },
      {
        product: 'Deposit',
        date: 'Jul 5th,21',
        story: '$100 from Stanbic',
        flow: 1
      },
      {
        product: 'Bank Transfer',
        date: 'June 30,21',
        story: '$50 to Stanbic',
        flow: 0
      },
      {
        product: 'Received Funds',
        date: 'June 21,21',
        story: '$10 from Richard Mubiru',
        flow: 1
      }
    ];
  }
}
