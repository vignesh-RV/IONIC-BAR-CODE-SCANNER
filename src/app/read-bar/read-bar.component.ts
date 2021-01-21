import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'read-bar',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.scss'],
})
export class ReadBarCode implements OnInit {
  scanData:any;
  options :BarcodeScannerOptions;
  allItems:any = [];

  constructor(private barcodeScanner: BarcodeScanner,
    private storage:StorageService,
    private router:Router) { }

  ngOnInit() {
    if( this.storage.currentBill ){
      this.allItems = this.storage.currentBill.allItems || [];
    }
  }

  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.scanData = this.storage.getDataById(barcodeData.text) || barcodeData;
        if( !this.scanData.qty ) this.scanData.qty = 1; //initial quantity

        let index = this.allItems.findIndex((item)=> item.id == this.scanData.id);
        if(index != -1) {
          this.allItems[index].qty++;
        } else this.allItems.push( this.scanData );
    }, (err) => {
        console.log("Error occured : " + err);
    });         
  }

  getTotal(): number{
    let total = 0;
    this.allItems.forEach(item => {
      total += (item.qty * item.price)
    });
    return total;
  }

  clearCart(): any{
    this.allItems = [];
    this.scanData = null;
    this.storage.currentBill = null;
  }

  redirectToPayment(): any{
    this.storage.currentBill = {items: this.allItems, total: this.getTotal()}
    this.router.navigate(['/payments'])
  }

  deleteItem(index): any{
    this.allItems.splice(index,1);
  }
}
