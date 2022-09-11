import { HttpClient } from '@angular/common/http';
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
  items: Array<Item> = []
}

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html'
} )
export class AppComponent {
  title = 'groceries-assistance';

  url = 'http://localhost:3000/receipt'

  receipt: Receipt = new Receipt()

  barcode: string = ""
  name: string = ""
  price: number = 0.00

  constructor( private httpClient: HttpClient ) { }

  updateTotalAmount(): number {
    let acc: number = 0
    for ( let index = 0; index < this.receipt.items.length; index++ ) {
      acc += +this.receipt.items[index].price;
    }

    this.receipt.totalAmount = +acc

    return this.receipt.totalAmount
  }

  addItem() {
    const newItem = new Item()

    newItem.barcode = this.barcode
    newItem.name = this.name
    newItem.price = this.price

    this.receipt.items.push( newItem )
    this.updateTotalAmount()

    this.barcode = ""
    this.name = ""
    this.price = 0.00
  }

  removeItem( item: Item ) {
    this.receipt.items = this.receipt.items.filter( elem => elem !== item )
    this.updateTotalAmount()
  }

  sendReceipt() {
    this.httpClient
      .post( this.url, this.receipt )
      .subscribe( result => console.log( result ), error => console.error( error ) );
  }

}
