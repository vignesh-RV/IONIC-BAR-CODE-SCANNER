import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllListComponent } from './all-list/all-list.component';
import { CreateBarCode } from './create-bar/create-bar.component';
import { AppPayments } from './payments/payments.component';
import { ReadBarCode } from './read-bar/read-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'read-bar',
    pathMatch: 'full'
  },
  {
    path: 'create-bar',
    component: CreateBarCode
  },
  {
    path: 'read-bar',
    component: ReadBarCode
  },
  {
    path: 'list',
    component: AllListComponent
  },
  {
    path: 'payments',
    component: AppPayments
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
