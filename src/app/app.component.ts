import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'undo-visualiser';

  transaction = '';
  ownTransaction = '';

  snapshot = [];
  transactionQueue = [];
  undoQueue = [];
  redoQueue = [];

  ownTransactions = [];

  addTransaction() {
    this.transactionQueue.push('___' + this.transaction);
    this.transaction = '';
    this.ownTransactions = [...this.transactionQueue].reverse();
  }

  addOwnTransaction() {
    const ownTransaction = '_x_' + this.ownTransaction;
    this.transactionQueue.push(ownTransaction);
    this.ownTransaction = '';
    this.ownTransactions = [...this.transactionQueue].reverse();
  }

  addUndo() {
    const lastOwnTransaction = this.ownTransactions[this.ownTransactions.length - 1];
    const undoTransaction = 'u' + lastOwnTransaction.slice(1);
    this.undoQueue.push(undoTransaction);
    this.transactionQueue.push(undoTransaction);
  }

  addRedo() {
    // this.redoQueue.push(this.redo);
  }
}
