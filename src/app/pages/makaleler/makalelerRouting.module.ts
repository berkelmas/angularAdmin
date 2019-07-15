import { NgModule } from '@angular/core';
import { MakalelerComponent } from './makaleler.component';
import { RouterModule, Routes } from '@angular/router';

import { EditmakaleComponent } from './editmakale/editmakale.component';
import { AddmakaleComponent } from './addmakale/addmakale.component';

const routes: Routes = [
  {
    path: '',
    component: MakalelerComponent,
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
