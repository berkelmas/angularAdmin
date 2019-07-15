import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MakalelerComponent } from './makaleler.component';

import { MakalelerRoutingModule } from './makalelerRouting.module';

import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

import { MakalelerService } from './makaleler.service';

// Import CKEditor
import './ckeditor.loader';
import 'ckeditor';

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
import { AddmakaleComponent } from './addmakale/addmakale.component';

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
    EditmakaleComponent,
    AddmakaleComponent,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
  providers: [
    MakalelerService,
  ],
})
export class MakalelerModule {}
