import { NgModule } from '@angular/core';
import { MakalelerComponent } from './makaleler.component';
import { RouterModule, Routes } from '@angular/router';

import { EditmakaleComponent } from './editmakale/editmakale.component';

const routes: Routes = [
  {
    path: '',
    component: MakalelerComponent,
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
