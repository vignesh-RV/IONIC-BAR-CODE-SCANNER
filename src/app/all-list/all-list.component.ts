import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss'],
})
export class AllListComponent implements OnInit {
  allData:any = [];

  constructor(private storage:StorageService) { }

  ngOnInit() {
    this.allData = this.storage.getStoredData();
  }
}
