import { NgModule } from '@angular/core';
import { MakalelerComponent } from './makaleler.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MakalelerComponent,
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
