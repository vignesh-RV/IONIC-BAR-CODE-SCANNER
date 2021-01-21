import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class AppPayments implements OnInit {
  paymentType:string = 'CCARD';
  constructor(private router: Router, public storage:StorageService) { }

  ngOnInit() { }

  redirectToScanPage(): any{
    this.router.navigate(["/read-bar"]);
  }
}
