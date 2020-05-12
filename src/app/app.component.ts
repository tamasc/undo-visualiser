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
    const transaction = { id: this.transaction, own: false };
    this.transaction = '';
    this.transactionQueue.push(transaction);
    this.snapshot.push(transaction);
  }

  addOwnTransaction() {
    const transaction = { id: this.ownTransaction, own: true };
    this.ownTransaction = '';
    this.transactionQueue.push(transaction);
    this.snapshot.push(transaction);
  }

  addUndo() {
    const reversedTrQueue = [...this.transactionQueue].reverse();
    const lastOwnTr = reversedTrQueue.find(tr => tr.own && !tr.undo);
    if (lastOwnTr) {
      const undoTr = { ...lastOwnTr, id: lastOwnTr.id, undo: true };
      this.transactionQueue.push(undoTr);
      this.undoQueue.push(undoTr);
      // rebuild snapshot
      this.snapshot = [...this.transactionQueue].filter(tr => tr.id !== lastOwnTr.id);
    }
    // const undoTransaction = 'u' + lastOwnTransaction.slice(1);
    // this.undoQueue.push(undoTransaction);
    // this.transactionQueue.push(undoTransaction);
  }

  addRedo() {
    // this.redoQueue.push(this.redo);
  }
}
