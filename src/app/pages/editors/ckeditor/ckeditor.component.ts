import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `

        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>

  `,
})
export class CKEditorComponent {
}
