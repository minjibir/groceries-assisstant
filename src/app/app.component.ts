import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class Item {
  barcode: string = "";
  name: string = "";
  price: number = 0;
}

export class Receipt {
  id: string = ''
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

  url = 'http://localhost:3000/receipt'

  itemBarcode = ''
  itemName = ''
  itemPrice = 0.00

  constructor(private httpClient: HttpClient) {}

  receipt: Receipt = new Receipt()

  updateTotalAmount(): number {
    let acc: number = 0
    for (let index = 0; index < this.receipt.items.length; index++) {
      acc += +this.receipt.items[index].price;
    }

    this.receipt.totalAmount = +acc

    return this.receipt.totalAmount
  }

  addItem() {

    let item = new Item()

    item.barcode = this.itemBarcode
    item.name = this.itemName
    item.price = +this.itemPrice

    this.receipt.items.push(item)
    this.updateTotalAmount()

    this.itemBarcode = ''
    this.itemName = ''
    this.itemPrice = 0.00

    console.table(this.receipt.items)
  }

  removeItem(item: Item) {
    this.receipt.items = this.receipt.items.filter(elem => elem !== item)
    this.updateTotalAmount()
  }

  sendReceipt() {
    console.log(this.receipt)

    this.httpClient
      .post(this.url, this.receipt)
      .subscribe(res => console.log(res), err => console.error(err))
  }

}
