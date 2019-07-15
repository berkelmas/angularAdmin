import { NgModule } from '@angular/core';
import { SmartTableUzmanliklarComponent } from './smart-table-uzmanliklar/smart-table-uzmanliklar.component';
import { EdituzmanlikComponent } from './edituzmanlik/edituzmanlik.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SmartTableUzmanliklarComponent,
  },
  {
    path: ':id/:uzmanlik_slug',
    component: EdituzmanlikComponent,
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
export class UzmanliklarRoutingModule {}
