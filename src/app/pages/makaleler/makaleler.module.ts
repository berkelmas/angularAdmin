import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MakalelerComponent } from './makaleler.component';
import { CKEditorComponent } from './editmakale/ckeditor/ckeditor.component';

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
import { CKEditorModule } from 'ng2-ckeditor';
import { EditmakaleComponent } from './editmakale/editmakale.component';

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
    CKEditorModule,

    FormsModule,
  ],
  declarations: [
    MakalelerComponent,
    SmartTableComponent,
    ShowcaseDialogComponent,
    CKEditorComponent,
    EditmakaleComponent,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
  providers: [
    MakalelerService,
  ],
})
export class MakalelerModule {}
