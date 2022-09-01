import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'groceries-assistance';

  receiptNumber = ''
  totalAmount = 0.00
  purchaseDate = ''

  itemBarcode = ''
  itemName = ''
  itemPrice = 0.00

  itemsList = Array<Item>()

  addItem() {
    this.totalAmount += +this.itemPrice
    
    let item = new Item()

    item.barcode = this.itemBarcode
    item.name = this.itemName
    item.price = this.itemPrice

    this.itemsList.push(item)

    console.table(this.itemsList)
  }

  removeItem(barcode: string) {
    let item = this.itemsList.find(item => item.barcode == barcode)
    // this.itemsList.pop(item)
  }

  // function removeItem() {

  // 	// Items display table
  // 	const itemListTable = document.querySelector('#itemListTable')

  // 	removeItemBtn.addEventListener('click', () => {
  // 		const row = removeItemBtn.parentElement.parentElement
  // 		const itemBarcodeKey = row.firstChild.textContent
  // 		const removedItemPrice = row.children.item(2).textContent

  // 		console.log(removedItemPrice)

  // 		itemsMap.delete(itemBarcodeKey)
  // 		itemListTable.removeChild(row)

  // 		totalAmount -= +removedItemPrice
  // 		console.log(itemsMap)
  // 	})

  // }

  // const saveBtn = document.querySelector('#saveBtn')

  // saveBtn.addEventListener('click', saveReceipt)

  // function saveReceipt() {
  // 	const itemsInListForm = []

  // 	for (let item of itemsMap) {
  // 		itemsInListForm.push(item[1])
  // 	}

  // 	const receipt = {
  // 		"receiptAumber": rcNo,
  // 		"totalAmount": totalAmount,
  // 		"purchaseDate": purchaseDateTxt.value,
  // 		"listOfItems": itemsInListForm
  // 	}

  // 	document.querySelector('#itemsMap').textContent = JSON.stringify(receipt)
  // 	const ur = 'http://localhost:3000/receipts'
  // 	sendReceipt(receipt, ur)
  // }

  // function sendReceipt(receipt, url) {
  // 	fetch(url, {
  // 		method: 'POST',
  // 		headers: {'Content-Type': 'application/json'},
  // 		body: receipt,
  // 	}).catch(err => console.log(err))
  // 	.then(result => console.log(result))
  // }
}
