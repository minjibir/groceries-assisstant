import { Component } from '@angular/core';

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

  itemsMap = new Map()

  addItem() {
    this.totalAmount += +this.itemPrice
    let item = { "barcode": this.itemBarcode, "name": this.itemName, "price": this.itemPrice }
    this.itemsMap.set(this.itemBarcode, item)

    // 	// New item row
    const itemTr = document.createElement('tr')

    // New item cells
    const itemBarcodeTd = document.createElement('td')
    const itemNameTd = document.createElement('td')
    const itemPriceTd = document.createElement('td')
    const control = document.createElement('td')

    const removeItemBtn = document.createElement('button')
    removeItemBtn.innerText = "X"

    control.appendChild(removeItemBtn)

    itemBarcodeTd.textContent = item.barcode
    itemNameTd.textContent = item.name
    itemPriceTd.textContent = item.price.toString()

    // Add cells to the row-element
    itemTr.appendChild(itemBarcodeTd)
    itemTr.appendChild(itemNameTd)
    itemTr.appendChild(itemPriceTd)
    itemTr.appendChild(control)

    // Add row-element to the table
    itemListTable.appendChild(itemTr)
  }

  // function addItem() {

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
