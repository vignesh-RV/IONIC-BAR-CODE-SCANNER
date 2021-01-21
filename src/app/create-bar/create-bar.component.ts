import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as JsBarcode from "JsBarcode";
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.scss'],
})
export class CreateBarCode implements OnInit {
  public encodedData: string;
  private encodeData: {name:string, price:number} = {name: null, price: null};
  @ViewChild('barcode') barcode: ElementRef;
  constructor(private storageService: StorageService) { }

  ngOnInit() { }

  encodeText(){
    this.encodeData.price = Number( this.encodeData.price );
    let generatedData = this.storageService.addNewData(this.encodeData);
    JsBarcode(this.barcode.nativeElement, generatedData.id);
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar) || (event.target.value.includes(".") && event.key == ".")) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
