import { NgModule } from '@angular/core';
import { MakalelerComponent } from './makaleler.component';
import { MakalelerRoutingModule } from './makalelerRouting.module';

import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

import { MakalelerService } from './makaleler.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
  NbIconModule,
} from '@nebular/theme';

const ENTRY_COMPONENTS = [
  ShowcaseDialogComponent,
];

@NgModule({
  imports: [
    MakalelerRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbSelectModule,
    NbTabsetModule,
    NbIconModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    MakalelerComponent,
    SmartTableComponent,
    ShowcaseDialogComponent,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
  providers: [
    MakalelerService,
  ],
})
export class MakalelerModule {}
