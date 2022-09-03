import { Component } from '@angular/core';

export class Item {
  barcode: string = "";
  name: string = "";
  price: number = 0;
}

export class Receipt {
  receiptNumber: string = ''
  totalAmount: number = 0.00
  purchaseDate: string = ''
  items: Item[] = []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'groceries-assistance';

  url = 'http://localhost:3000/receipts'

  receiptNumber = ''
  totalAmount: number = 0.00
  purchaseDate = ''

  itemBarcode = ''
  itemName = ''
  itemPrice = 0.00

  itemsList = Array<Item>()

  receipt: Receipt = new Receipt()

  updateTotalAmount(): number {
    let acc: number = 0
    for (let index = 0; index < this.itemsList.length; index++) {
      acc += +this.itemsList[index].price;
    }

    this.totalAmount = +acc

    return this.totalAmount
  }

  addItem() {

    let item = new Item()

    item.barcode = this.itemBarcode
    item.name = this.itemName
    item.price = +this.itemPrice

    this.itemsList.push(item)
    this.updateTotalAmount()

    this.itemBarcode = ''
    this.itemName = ''
    this.itemPrice = 0.00

    console.table(this.itemsList)
  }

  removeItem(item: Item) {
    this.itemsList = this.itemsList.filter(elem => elem !== item)
    this.updateTotalAmount()
  }

  getReceipt(): Receipt {
    this.receipt.receiptNumber = this.receiptNumber
    this.receipt.totalAmount = this.updateTotalAmount()
    this.receipt.purchaseDate = this.purchaseDate
    this.receipt.items = this.itemsList

    return this.receipt
  }

  sendReceipt(receipt: Receipt, url: string) {

  }

  // function sendReceipt(receipt, url) {
  // 	fetch(url, {
  // 		method: 'POST',
  // 		headers: {'Content-Type': 'application/json'},
  // 		body: receipt,
  // 	}).catch(err => console.log(err))
  // 	.then(result => console.log(result))
  // }
  
}
