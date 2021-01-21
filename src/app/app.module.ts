import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBarCode } from './create-bar/create-bar.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ReadBarCode } from './read-bar/read-bar.component';
import { FormsModule } from '@angular/forms';
import { AllListComponent } from './all-list/all-list.component';
import { AppPayments } from './payments/payments.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateBarCode,
    ReadBarCode,
    AllListComponent,
    AppPayments
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
