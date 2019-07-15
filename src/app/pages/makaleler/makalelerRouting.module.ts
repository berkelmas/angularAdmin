import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartTableComponent } from './smart-table/smart-table.component';
import { EditmakaleComponent } from './editmakale/editmakale.component';
import { AddmakaleComponent } from './addmakale/addmakale.component';

const routes: Routes = [
  {
    path: '',
    component: SmartTableComponent,
  },
  {
    path: 'addmakale',
    component: AddmakaleComponent,
  },
  {
    path: ':id/:makale_slug',
    component: EditmakaleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MakalelerRoutingModule {}
