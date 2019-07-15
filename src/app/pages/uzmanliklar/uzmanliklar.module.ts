import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UzmanliklarComponent } from './uzmanliklar.component';

import { UzmanliklarRoutingModule } from './uzmanliklarRouting.module';

import { SmartTableUzmanliklarComponent } from './smart-table-uzmanliklar/smart-table-uzmanliklar.component';

import { UzmanliklarService } from './uzmanliklar.service';

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
import { EdituzmanlikComponent } from './edituzmanlik/edituzmanlik.component';

@NgModule({
  imports: [
    UzmanliklarRoutingModule,
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
    UzmanliklarComponent,
    SmartTableUzmanliklarComponent,
    EdituzmanlikComponent,
  ],
  providers: [
    UzmanliklarService,
  ],
})
export class UzmanliklarModule {}
